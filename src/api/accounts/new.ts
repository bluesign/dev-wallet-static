import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"
import newAccountTransaction from "cadence/transactions/newAccount.cdc"
import {authz} from "src/authz"
import {FLOW_EVENT_TYPES} from "src/constants"
import fclConfig from "src/fclConfig"

type CreatedAccountResponse = {
  events: CreatedAccountEvent[]
}

type CreatedAccountEvent = {
  type: string
  data: {
    address: string
  }
}

export default async function API_accounts_new(label: any, scopes: any) {
  fclConfig(
    process.env.NEXT_PUBLIC_FLOW_ACCESS_NODE!,
    process.env.NEXT_PUBLIC_FLOW_ACCOUNT_ADDRESS!
  )

  const authorization = await authz(
    process.env.NEXT_PUBLIC_FLOW_ACCOUNT_ADDRESS!,
    process.env.NEXT_PUBLIC_FLOW_ACCOUNT_KEY_ID!,
    process.env.NEXT_PUBLIC_FLOW_ACCOUNT_PRIVATE_KEY!
  )

  try {
    const txId = await fcl
      .send([
        fcl.transaction(newAccountTransaction),
        fcl.args([
          fcl.arg(label, t.String),
          fcl.arg(scopes, t.Array(t.String)),
        ]),
        fcl.proposer(authorization),
        fcl.payer(authorization),
        fcl.limit(100),
      ])
      .then(fcl.decode)

    const txStatus: CreatedAccountResponse = await fcl.tx(txId).onceSealed()

    const createdAccountEvent = txStatus.events.find(
      (e: CreatedAccountEvent) => e.type === FLOW_EVENT_TYPES.accountCreated
    )
    if (!createdAccountEvent?.data?.address) throw "Account address not created"

    return {address: createdAccountEvent.data.address}
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("ISSUE CREATING ACCOUNT", error)
    return {errors: ["Account creation failed."]}
  }
}

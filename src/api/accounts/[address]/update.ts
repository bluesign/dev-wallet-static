import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"
import updateAccountTransaction from "cadence/transactions/updateAccount.cdc"
import {authz} from "src/authz"
import fclConfig from "src/fclConfig"

export default async function API_accounts_update(
  paddress: any,
  label: any,
  scopes: any
) {
  const address = fcl.withPrefix(paddress)

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
        fcl.transaction(updateAccountTransaction),
        fcl.args([
          fcl.arg(address, t.Address),
          fcl.arg(label, t.String),
          fcl.arg(scopes, t.Array(t.String)),
        ]),
        fcl.proposer(authorization),
        fcl.payer(authorization),
        fcl.limit(100),
      ])
      .then(fcl.decode)

    await fcl.tx(txId).onceSealed()

    return {}
  } catch (_error) {
    return {errors: "Account update failed."}
  }
}

import * as fcl from "@onflow/fcl"
import getAccounts from "cadence/scripts/getAccounts.cdc"
import {Optional} from "types"
import fclConfig from "src/fclConfig"

export type Account = {
  type: "ACCOUNT"
  address: string
  scopes: string[]
  keyId?: number
  label?: string
}

export type NewAccount = Optional<Account, "address">

export type AccountsResponse = Account[]

export async function API_Accounts() {
  fclConfig(
    process.env.NEXT_PUBLIC_FLOW_ACCESS_NODE!,
    process.env.NEXT_PUBLIC_FLOW_ACCOUNT_ADDRESS!
  )

  try {
    const accounts = await fcl.send([fcl.script(getAccounts)]).then(fcl.decode)
    const serviceAccount = accounts.find(
      (acct: Account) =>
        acct.address === process.env.NEXT_PUBLIC_FLOW_ACCOUNT_ADDRESS
    )
    const userAccounts = accounts
      .filter(
        (acct: Account) =>
          acct.address !== process.env.NEXT_PUBLIC_FLOW_ACCOUNT_ADDRESS
      )
      .reverse()
    return [serviceAccount, ...userAccounts].filter(Boolean)
  } catch (_error) {
    return []
  }
}

import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"
import getAccount from "cadence/scripts/getAccount.cdc"
import fclConfig from "src/fclConfig"

export default async function API_accounts_address(address: any) {
  fclConfig(
    process.env.NEXT_PUBLIC_FLOW_ACCESS_NODE!,
    process.env.NEXT_PUBLIC_FLOW_ACCOUNT_ADDRESS!
  )

  try {
    const account = await fcl
      .send([fcl.script(getAccount), fcl.args([fcl.arg(address, t.Address)])])
      .then(fcl.decode)
    return account
  } catch (_error) {
    return {}
  }
}

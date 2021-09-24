import * as fcl from "@onflow/fcl"
import fclConfig from "src/fclConfig"

export default async function API_is_init() {
  fclConfig(
    process.env.NEXT_PUBLIC_FLOW_ACCESS_NODE!,
    process.env.NEXT_PUBLIC_FLOW_ACCOUNT_ADDRESS!
  )
  console.log("is_init")

  try {
    const account = await fcl
      .send([fcl.getAccount(process.env.NEXT_PUBLIC_FLOW_ACCOUNT_ADDRESS!)])
      .then(fcl.decode)
    if (account["contracts"]["FCL"]) {
      return true
    } else {
      return false
    }
  } catch (error) {
    return false
  }
}

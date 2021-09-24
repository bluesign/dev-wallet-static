import {sign} from "src/crypto"

export default function API_sign(message: any) {
  const result = {
    signature: sign(
      process.env.NEXT_PUBLIC_FLOW_ACCOUNT_PRIVATE_KEY!,
      message!
    ),
  }
  console.log("signed")
  console.log(sign)
  console.log(result)

  return result
}

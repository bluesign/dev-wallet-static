import {sign} from "src/crypto"

export default async function API_user_sig(
  message: any,
  addr: any,
  keyId: any
) {
  // UserDomainTag is the prefix of all signed user space payloads.
  //
  // A domain tag is encoded as UTF-8 bytes, right padded to a total length of 32 bytes.
  const rightPaddedHexBuffer = (value: string, pad: number) =>
    Buffer.from(value.padEnd(pad * 2, "0"), "hex")

  const USER_DOMAIN_TAG = rightPaddedHexBuffer(
    Buffer.from("FLOW-V0.0-user").toString("hex"),
    32
  ).toString("hex")

  const prependUserDomainTag = (msg: string) => USER_DOMAIN_TAG + msg

  return {
    addr: addr,
    keyId: keyId,
    signature: sign(
      process.env.NEXT_PUBLIC_FLOW_ACCOUNT_PRIVATE_KEY!,
      prependUserDomainTag(message)
    ),
  }
}

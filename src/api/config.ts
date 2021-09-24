export type ConfigResponse = {
  address?: string
  keyId?: string
  privateKey?: string
  accessNode?: string
}

export function API_Config() {
  const response: ConfigResponse = {
    address: process.env.NEXT_PUBLIC_FLOW_ACCOUNT_ADDRESS,
    keyId: process.env.NEXT_PUBLIC_FLOW_ACCOUNT_KEY_ID,
    privateKey: process.env.NEXT_PUBLIC_FLOW_ACCOUNT_PRIVATE_KEY,
    accessNode: process.env.NEXT_PUBLIC_FLOW_ACCESS_NODE,
  }
  return response
}

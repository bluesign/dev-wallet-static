/** @jsxImportSource theme-ui */
import * as fcl from "@onflow/fcl"
import AuthzActions from "components/AuthzActions"
import AuthzDetails from "components/AuthzDetails"
import AuthzHeader from "components/AuthzHeader"
import Code from "components/Code"
import Dialog from "components/Dialog"
import {AuthzContextProvider} from "contexts/AuthzContext"
import useAuthzContext from "hooks/useAuthzContext"
import {useState} from "react"
import {WalletUtils} from "@onflow/fcl"
import API_sign from "src/api/sign"

function AuthzContent() {
  const flowAccountAddress: string =
    process.env.NEXT_PUBLIC_FLOW_ACCOUNT_ADDRESS!
  const avatarUrl: string = process.env.NEXT_PUBLIC_FLOW_AVATAR_URL!

  const {isExpanded, codePreview} = useAuthzContext()
  const {currentUser, proposalKey, message, id} = useAuthzContext()
  const [isLoading, setIsLoading] = useState(false)

  const onApprove = () => {
    setIsLoading(true)

    const signature = API_sign(message)
    window.parent.postMessage(
      {
        jsonrpc: "2.0",
        id,
        result: {
          f_type: "PollingResponse",
          f_vsn: "1.0.0",
          status: "APPROVED",
          reason: null,
          data: {
            f_type: "CompositeSignature",
            f_vsn: "1.0.0",
            addr: fcl.sansPrefix(currentUser.address),
            keyId: Number(proposalKey.keyId),
            signature: signature["signature"],
          },
        },
      },
      "*"
    )
    setIsLoading(false)
  }

  const onDecline = () => WalletUtils.close()

  return (
    <Dialog
      title="Authorize Transaction"
      header={
        !isExpanded && (
          <AuthzHeader
            flowAccountAddress={flowAccountAddress}
            avatarUrl={avatarUrl}
          />
        )
      }
      footer={
        !isExpanded && (
          <AuthzActions
            onApprove={onApprove}
            isLoading={isLoading}
            onDecline={onDecline}
          />
        )
      }
    >
      {!!codePreview ? (
        <Code title={codePreview.title} value={codePreview.value} />
      ) : (
        <AuthzDetails />
      )}
    </Dialog>
  )
}

function Authz({
  flowAccountAddress,
  avatarUrl,
}: {
  flowAccountAddress: string
  avatarUrl: string
}) {
  return (
    <AuthzContextProvider>
      <AuthzContent />
    </AuthzContextProvider>
  )
}

export default Authz

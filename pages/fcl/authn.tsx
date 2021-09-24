/** @jsxImportSource theme-ui */
import AccountForm from "components/AccountForm"
import AccountsList from "components/AccountsList"
import Dialog from "components/Dialog"
import {AuthnContextProvider} from "contexts/AuthnContext"
import useAccounts from "hooks/useAccounts"
import {Account, NewAccount} from "src/api/accounts"
import {useState} from "react"
import {Err} from "src/comps/err.comp"

function Authn() {
  const flowAccountAddress: string =
    process.env.NEXT_PUBLIC_FLOW_ACCOUNT_ADDRESS!
  const avatarUrl: string = process.env.NEXT_PUBLIC_FLOW_AVATAR_URL!

  const [editingAccount, setEditingAccount] = useState<
    Account | NewAccount | null
  >(null)
  const {data, error, isLoading} = useAccounts()
  const [createdAccountAddress, setCreatedAccountAddress] = useState<
    string | null
  >(null)

  const onEditAccount = (account: Account | NewAccount) => {
    setCreatedAccountAddress(null)
    setEditingAccount(account)
  }

  const onSubmitComplete = (createdAccountAddress?: string) => {
    setEditingAccount(null)
    if (createdAccountAddress) setCreatedAccountAddress(createdAccountAddress)
  }
  const onCancel = () => setEditingAccount(null)

  if (!data && error) return <Err error={error} />
  if (!data || isLoading) return null

  return (
    <AuthnContextProvider>
      <Dialog>
        <div>
          {editingAccount ? (
            <AccountForm
              account={editingAccount}
              onSubmitComplete={onSubmitComplete}
              onCancel={onCancel}
              flowAccountAddress={flowAccountAddress}
              avatarUrl={avatarUrl}
            />
          ) : (
            <AccountsList
              accounts={data}
              onEditAccount={onEditAccount}
              createdAccountAddress={createdAccountAddress}
              flowAccountAddress={flowAccountAddress}
              avatarUrl={avatarUrl}
            />
          )}
        </div>
      </Dialog>
    </AuthnContextProvider>
  )
}

export default Authn

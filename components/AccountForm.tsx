/** @jsxImportSource theme-ui */
import {SXStyles} from "types"
import AccountListItemScopes from "components/AccountListItemScopes"
import Button from "components/Button"
import ConnectedAppHeader from "components/ConnectedAppHeader"
import FormErrors from "components/FormErrors"
import {Field, Form, Formik} from "formik"
import {Account, NewAccount} from "src/api/accounts"
import {useState} from "react"
import {updateAccountSchemaClient} from "src/validate"
import {Box, Themed} from "theme-ui"
import {CustomInputComponent} from "./Inputs"

import API_accounts_new from "src/api/accounts/new"
import API_accounts_update from "src/api/accounts/[address]/update"

const styles: SXStyles = {
  actions: {
    display: "flex",
    flex: 1,
    pt: 20,
    pb: 20,
  },
}

export default function AccountForm({
  account,
  onSubmitComplete,
  onCancel,
  flowAccountAddress,
  avatarUrl,
}: {
  account: Account | NewAccount
  onSubmitComplete: (createdAccountAddress?: string) => void
  onCancel: () => void
  flowAccountAddress: string
  avatarUrl: string
}) {
  const [errors, setErrors] = useState<string[]>([])

  return (
    <div>
      <Formik
        initialValues={{
          label: account.label,
          scopes: new Set(account.scopes),
        }}
        validationSchema={updateAccountSchemaClient}
        onSubmit={({label, scopes}, {setSubmitting}) => {
          setErrors([])
          setSubmitting(true)
          if (account.address) {
            //update
            API_accounts_update(account.address, label, Array.from(scopes))
            onSubmitComplete(undefined)
            setSubmitting(false)
          } else {
            //new
            API_accounts_new(label, Array.from(scopes))
            onSubmitComplete(undefined)
            setSubmitting(false)
          }
        }}
      >
        {({values, setFieldValue, isSubmitting, isValid}) => (
          <Form data-test="fund-account-form">
            <Box mb={4}>
              <ConnectedAppHeader
                info={false}
                account={account}
                title={
                  account.address ? "Manage Account" : "Create New Account"
                }
                description={account.address}
                flowAccountAddress={flowAccountAddress}
                avatarUrl={avatarUrl}
              />
            </Box>

            <Box mb={3}>
              <Field
                component={CustomInputComponent}
                inputLabel="Label"
                name="label"
                placeholder="Account label"
                required
              />
            </Box>

            <Box mb={3}>
              <AccountListItemScopes
                scopes={values.scopes}
                setScopes={newScopes => setFieldValue("scopes", newScopes)}
                compact={true}
              />
              <Themed.hr sx={{mt: 0, mb: 1}} />
            </Box>

            <div sx={styles.actions}>
              <Button
                onClick={onCancel}
                type="button"
                variant="ghost"
                block
                size="lg"
                sx={{flex: 1, mr: 10, w: "50%"}}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                block
                size="lg"
                sx={{flex: 1, ml: 10, w: "50%"}}
                disabled={isSubmitting || !isValid}
              >
                {account.address ? "Save" : "Create"}
              </Button>
            </div>

            {errors.length > 0 && <FormErrors errors={errors} />}
          </Form>
        )}
      </Formik>
    </div>
  )
}

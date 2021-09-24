import {API_Accounts} from "../src/api/accounts"
import {API_Config} from "../src/api/config"
import useSWR from "swr"

function Config() {
  const config = API_Config()

  if (!config) return <div>Loading...</div>

  return (
    <div>
      <h1>Config</h1>
      <ul>
        {Object.entries(config).map(([key, value]) => {
          return (
            <li key={key}>
              <strong>{key}: </strong>
              <span>{value}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function getAccounts() {
  return API_Accounts().then(res => res)
}

function Accounts() {
  const {data: accounts, error} = useSWR("accounts", getAccounts)
  if (error) return <div>Error</div>
  if (!accounts) return <div>Loading...</div>
  console.log(accounts)
  return (
    <div>
      <h1>Accounts</h1>
      <ul>
        {accounts.map(a => {
          return (
            <li key={a.address}>
              <pre>{JSON.stringify(a, null, 2)}</pre>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function Page() {
  return (
    <div>
      <Config />
      <Accounts />
    </div>
  )
}

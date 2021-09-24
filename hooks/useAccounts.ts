import {API_Accounts} from "src/api/accounts"
import useSWR from "swr"

function getAccounts() {
  return API_Accounts()
}

export default function useAccounts() {
  console.log("getAccounts");
  const {data, error} = useSWR("accounts", getAccounts)
  return {
    data,
    error: error,
    isLoading: !error && !data,
  }
}

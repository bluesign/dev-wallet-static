import {AuthnContext} from "contexts/AuthnContext"
import {useContext} from "react"

const useAuthnContext = () => {
  console.log("useAuthnContext");

  return useContext(AuthnContext)
}

export default useAuthnContext

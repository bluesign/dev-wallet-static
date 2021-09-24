import useConnectedAppConfig, {
  ConnectedAppConfig,
} from "hooks/useConnectedAppConfig"
import React, {createContext, useEffect, useState} from "react"
import useSwr from "swr"
import API_is_init from "../src/api/is-init"
import API_init from "../src/api/init"

type AuthnContextType = {
  connectedAppConfig: ConnectedAppConfig
  appScopes: string[]
  initError: string | null
}

export const AuthnContext = createContext<AuthnContextType>({
  connectedAppConfig: {} as ConnectedAppConfig,
  appScopes: [],
  initError: null,
})

export function AuthnContextProvider({children}: {children: React.ReactNode}) {
  const isInit = useSwr<boolean>("is_init", API_is_init)
  const {connectedAppConfig, appScopes} = useConnectedAppConfig()
  const [error] = useState<string | null>(null)

  const initializeWallet = () => {
     API_init();
  }

  useEffect(() => {
    if (isInit.data === false) initializeWallet()
  }, [isInit])

  if (!isInit.data || !connectedAppConfig) return null
  const value = {connectedAppConfig, appScopes, initError: error}

  return <AuthnContext.Provider value={value}>{children}</AuthnContext.Provider>
}

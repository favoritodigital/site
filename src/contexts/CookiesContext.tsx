'use client'

import React, { useState, createContext, ReactNode, useEffect } from 'react'

interface CookiesContextData {
  cookiesIsEnabled: boolean
  setCookiesIsEnabled: () => void
}

interface Props {
  children: ReactNode
}

export const CookiesContext = createContext({} as CookiesContextData)

export function CookiesProvider({ children }: Props) {
  const [cookiesIsEnabled, setCookiesIsEnabled] = useState(true)

  useEffect(() => {
    const localStorageCookiesIsEnabledValue = localStorage.getItem('cookiesIsEnabled')
    setCookiesIsEnabled(localStorageCookiesIsEnabledValue === 'true')
  }, [])

  const handleSetCookiesIsEnabled = () => {
    localStorage.setItem('cookiesIsEnabled', 'true')
    setCookiesIsEnabled(true)
  }

  return (
    <CookiesContext.Provider
      value={{
        cookiesIsEnabled,
        setCookiesIsEnabled: handleSetCookiesIsEnabled,
      }}
    >
      {children}
    </CookiesContext.Provider>
  )
}

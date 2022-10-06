import React, { ReactNode } from 'react'

import { BrandProvider } from './brandContext'

interface AppProviderProps {
  children: ReactNode
}

function AppProvider({ children }: AppProviderProps) {
  return <BrandProvider>{children}</BrandProvider>
}

export default AppProvider

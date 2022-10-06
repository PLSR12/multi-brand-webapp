import * as React from 'react'
import { ReactNode } from 'react'

interface IBrandContext {
  brand: string
  setBrand: (brand: string) => void
}

interface IBrandProvider {
  children: ReactNode
}

export const BrandContext = React.createContext<IBrandContext>(
  {} as IBrandContext
)

export function BrandProvider({ children }: IBrandProvider) {
  const [brand, setBrand] = React.useState<string>('')

  const { pathname } = window.location

  React.useEffect(() => {
    const brandiInUrl = pathname.split('/')[1]

    if (brandiInUrl === 'burger-king') {
      setBrand('BK')

      return
    } else if (brandiInUrl === 'popeyes') {
      setBrand('PLK')
    } else {
      return
    }
  }, [])
  return (
    <>
      <BrandContext.Provider value={{ brand, setBrand }}>
        {children}
      </BrandContext.Provider>
    </>
  )
}

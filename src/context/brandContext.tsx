import * as React from 'react'
import { ReactNode } from 'react'
import { IBrandAll } from '../models/IBrand'

interface IBrandContext {
  brand: IBrandAll
  setBrand: (brand: IBrandAll) => void
}

interface IBrandProvider {
  children: ReactNode
}

export const BrandContext = React.createContext<IBrandContext>(
  {} as IBrandContext
)

export function BrandProvider({ children }: IBrandProvider) {
  const [brand, setBrand] = React.useState<any>({})

  const { pathname } = window.location

  React.useEffect(() => {
    const brandiInUrl = pathname.split('/')[1]

    if (brandiInUrl === 'flamengo') {
      setBrand({
        brand: 'Flamengo',
        path: '/flamengo',
        colors: {
          primary: '#000',
          background: '#ff0000',
          text: '#fff',
        },
      })

      return
    } else if (brandiInUrl === 'brasil') {
      setBrand({
        brand: 'Brasil',
        path: '/brasil',
        colors: {
          background: '#0044ff',
          primary: '#fffb00',
          secondary: '#5eff00',
          text: '#fff',
        },
      })
    } else {
      return
    }
  }, [pathname])

  return (
    <>
      <BrandContext.Provider value={{ brand, setBrand }}>
        {Object.keys(brand).length && children}
      </BrandContext.Provider>
    </>
  )
}

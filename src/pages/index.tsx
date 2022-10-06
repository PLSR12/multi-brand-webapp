import * as S from './styles'
import * as React from 'react'
import { BrandContext } from '../context/brandContext'
import api from '../services/api'

export function Home() {
  const { brand, setBrand } = React.useContext(BrandContext)

  console.log(brand)

  React.useEffect(() => {
    async function loadProducts() {
      const { data: allSets }: any = await api.get(
        `/product/GetByBrand/${brand}`
      )

      console.log(allSets)
    }

    loadProducts()
  }, [brand])

  return (
    <S.Container brand={brand}>
      <h1> Texto para teste css {`${brand}`}</h1>
    </S.Container>
  )
}

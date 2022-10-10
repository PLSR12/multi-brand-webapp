import * as S from './styles'
import * as React from 'react'
import { BrandContext } from '../context/brandContext'

export function Home() {
  const { brand, setBrand } = React.useContext(BrandContext)

  return (
    <S.Container brand={brand}>
      <h1> Texto para teste css {`${brand.brand}`}</h1>
    </S.Container>
  )
}

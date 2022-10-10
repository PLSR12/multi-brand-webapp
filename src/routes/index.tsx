import * as React from 'react'
import { Route, Routes as RoutesWrapper } from 'react-router-dom'
import { BrandContext } from '../context/brandContext'

import * as Pages from '../pages'

export default function Routes() {
  const { brand, setBrand } = React.useContext(BrandContext)

  return (
    <RoutesWrapper>
      <Route path={`${brand.brand}/home`} element={<Pages.Home />} />
    </RoutesWrapper>
  )
}

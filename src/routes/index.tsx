import * as React from 'react'
import { Route, Routes as RoutesWrapper } from 'react-router-dom'

import * as Pages from '../pages'

export default function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/burger-king/home" element={<Pages.Home />} />
      <Route path="/popeyes/home" element={<Pages.Home />} />
    </RoutesWrapper>
  )
}

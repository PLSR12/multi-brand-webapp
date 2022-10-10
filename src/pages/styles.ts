import styled from 'styled-components'
import { IBrandAll } from '../models/IBrand'

interface Brand {
  brand: IBrandAll
}

export const Container = styled.main<Brand>`
  display: flex;
  margin: 0 auto;
  padding: 0 auto;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.brand.colors.background};
`

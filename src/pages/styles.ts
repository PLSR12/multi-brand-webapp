import styled from 'styled-components'

interface IBrand {
  brand: string
}

export const Container = styled.div<IBrand>`
  background: ${(props) => (props.brand === 'BK' ? 'red' : 'orange')};
`

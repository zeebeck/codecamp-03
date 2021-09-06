import styled from '@emotion/styled'

export const Input = styled.input`
  background: yellow;
`

export const Button = styled.button`
  background-color: ${(props) => (props.qqq === true ? 'red' : 'white')};
`
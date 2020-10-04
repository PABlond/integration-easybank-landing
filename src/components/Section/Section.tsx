import React, { FC } from "react"

import styled from "styled-components"

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Section: FC = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>
}

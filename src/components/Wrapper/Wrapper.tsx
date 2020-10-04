import { isUndefined } from "util"

import React, { FC } from "react"

import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  max-width: ${({ fluid }: { fluid: boolean }) => (fluid ? "100%" : "1440px")};
`

export const Wrapper: FC<{ fluid?: boolean }> = ({
  fluid = false,
  children,
  ...rest
}) => {
  return (
    <Container className="wrapper" fluid={fluid} {...rest}>
      {children}
    </Container>
  )
}

import React, { FC } from "react"

import styled from "styled-components"

import { colors } from "../../utils"

const Container = styled.a`
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.875rem 2rem;
  border-radius: 2rem;
  color: ${colors.neutral.white};
  text-decoration: none;
  background: linear-gradient(
    to right,
    ${colors.primary.limeGreen},
    ${colors.primary.brightCyan}
  );
  border: 1px solid ${colors.primary.brightCyan};
  transition: 0.4s;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const ButtonLink: FC<{ href: string }> = ({
  href,
  children,
  ...rest
}) => {
  return (
    <Container className="cta" href={href} {...rest}>
      {children}
    </Container>
  )
}

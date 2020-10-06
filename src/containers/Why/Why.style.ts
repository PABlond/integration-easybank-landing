import styled from "styled-components"

import { Wrapper as WrapMe } from "../../components"
import { breakpoints, colors } from "../../utils"

export const Wrapper = styled(WrapMe)`
  padding: 7rem 0;

  h1,
  .sub-title {
    padding: 0 7.5625rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 300;
    color: ${colors.primary.darkBlue};
  }

  .sub-title {
    width: 50%;
    margin−top: 2.3125rem;
    color: ${colors.neutral.grayishBlue};
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 4.375rem 0;

    h1,
    .sub-title {
      padding: 0 2rem;
      text-align: center;
    }

    .sub-title {
      margin−top: 1.5rem;
      width: auto;
      font-size: 14px;
      margin-bottom: 4rem;
    }
  }
`

export const Container = styled.div`
  margin-top: 4.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 7.5625rem;

  div {
    svg {
      margin-bottom: 2.5rem;
    }

    h3 {
      font-weight: 300;
      margin: 0;
      color: ${colors.primary.darkBlue};
    }

    p {
      margin-top: 2rem;
      color: ${colors.neutral.grayishBlue};
      font-size: 13px;
      line-height: 1.5rem;
    }
  }

  div:nth-child(2),
  div:nth-child(3) {
    padding: 0 1rem;
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 0 2rem;
    display: block;
    text-align: center;

    div {
      svg {
        margin-bottom: 1.75rem;
      }

      p {
        margin-top: 1.5rem;
        margin-bottom: 2.125rem;
      }
    }
  }

  @media (max-width: ${breakpoints.md}) and (min-width: ${breakpoints.xs}) {
    div {
      p {
        width: 50%;
        margin-right: auto;
        margin-left: auto;
      }
    }
  }
`

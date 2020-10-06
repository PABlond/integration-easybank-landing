import styled from "styled-components"

import { Section as SectionContainer } from "../../components"
import { breakpoints, colors } from "../../utils"

export const Section = styled(SectionContainer)`
  background: ${colors.neutral.veryLightGray};

  .wrapper {
    padding: 6.25rem 7.5625rem;

    h2 {
      color: ${colors.primary.darkBlue};
      font-weight: 400;
      margin: 0;
      margin-bottom: 1rem;
    }

    @media (max-width: ${breakpoints.md}) {
      padding: 6.25rem 2rem;

      h2 {
        text-align: center;
        margin-bottom: 2.25rem;
      }
    }
  }
`

export const Container = styled.div`
  display: flex;

  .item {
    text-decoration: none;
    border-radius: 0.5rem;
    background: ${colors.neutral.white};
    width: 100%;

    &:hover {
      h4 {
        color: ${colors.primary.limeGreen};
      }
    }

    .gatsby-image-wrapper {
      border-radius: 0.5rem 0.5rem 0 0;
      height: 200px;
    }

    span,
    h4,
    p {
      padding: 0 1.5rem;
    }

    span {
      font-size: 10px;
      display: block;
      color: ${colors.neutral.grayishBlue};
      padding-top: 1.75rem !important;
      padding-bottom: 1.75rem !important;
    }

    h4 {
      margin: 0;
      font-weight: 400;
      transition: 0.3s;
      color: ${colors.primary.darkBlue};
    }

    p {
      color: ${colors.neutral.grayishBlue};
      font-size: 13px;
      line-height: 1.5rem;
      margin-bottom: 1.75rem;
    }
  }

  .item:nth-child(1) {
    margin-right: 1rem;
  }

  .item:nth-child(2) {
    margin-left: 1rem;
  }

  .item:nth-child(3),
  .item:nth-child(4) {
    margin-left: 2rem;
  }

  @media (max-width: ${breakpoints.md}) {
    display: block;

    .item {
      display: block;
      margin: 0 !important;

      .gatsby-image-wrapper {
        margin-bottom: 2rem;
      }

      span {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        margin: 0;
        margin-bottom: 1rem;
      }

      p {
        padding-bottom: 2.75rem;
      }
    }
  }
`

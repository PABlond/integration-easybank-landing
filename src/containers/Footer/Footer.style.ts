import styled from "styled-components"

import { Section as SectionContainer } from "../../components"
import { breakpoints, colors } from "../../utils"

export const Section = styled(SectionContainer)`
  background: ${colors.primary.darkBlue};
  color: ${colors.neutral.white};

  .wrapper {
    padding: 3rem 7.5625rem;
    display: flex;
    justify-content: space-between;

    .footer-container {
      width: 60%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .cta-container {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: inherit;
      align-items: flex-end;

      .cta {
        width: fit-content;
      }

      span {
        color: ${colors.neutral.grayishBlue};
        margin-top: 1.875rem;
      }
    }

    @media (max-width: ${breakpoints.md}) {
      display: block;
      padding: 2.75rem 0;
      text-align: center;

      .footer-container {
        width: auto;
        display: block;
      }

      .cta-container {
        width: auto;
        display: block;

        a {
          display: block;
          margin: 2rem auto;
        }
      }
    }
  }
`

export const SocialContainer = styled.div`
  .easybank-logo {
    margin-bottom: 3.375rem;

    svg {
      g {
        path:nth-child(1) {
          fill: ${colors.neutral.white};
        }
      }
    }
  }

  .easybank-socials {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: ${breakpoints.md}) {
    .easybank-logo {
      margin-bottom: 2rem;
    }

    .easybank-socials {
      width: 50%;
      margin: auto;
      margin-bottom: 2.25rem;
    }
  }
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% / 3 * 2);

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: inherit;

    a {
      display: block;
      color: ${colors.neutral.white};
      text-decoration: none;
      transition: 0.4s;

      &:visited {
        color: ${colors.neutral.white};
      }

      &:hover {
        color: ${colors.primary.limeGreen};
      }
    }

    a:nth-child(2),
    a:nth-child(3) {
      margin-top: 1.375rem;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    width: auto;
    display: block;

    div {
      width: auto;

      a {
        line-height: 0.9;
        text-align: center;
        margin: 0 !important;
        margin-bottom: 1.5rem !important;
      }
    }
  }
`

import styled from "styled-components"

import { Section } from "../../components"
import { breakpoints, colors } from "../../utils"

export const ContainerSection = styled(Section)`
  background: ${colors.neutral.veryLightGray};
  position: fixed;
  width: 100%;
  z-index: 123;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 11.38888%;

    .responsive-hamburger {
      display: none;

      @media (max-width: ${breakpoints.md}) {
        display: block;
      }
    }

    .links-container {
      ul {
        margin: 0;
        display: flex;
        justify-content: space-between;
        list-style: none;
        padding: 0;

        li {
          padding: 2rem 1rem;
          border-bottom: 4px solid transparent;
          list-style-position: outside;

          a {
            color: ${colors.neutral.grayishBlue};
            transition: 0.4s;
            text-decoration: none;
          }
          &:hover {
            border-image-source: linear-gradient(
              to right,
              ${colors.primary.limeGreen},
              ${colors.primary.brightCyan}
            );
            border-image-slice: 5;
          }
        }
      }

      @media (max-width: ${breakpoints.md}) {
        box-shadow: 0px 10px 20rem 0px rgba(0, 0, 0, 0.75);
        display: ${({ open }: { open: boolean }) => (open ? "block" : "none")};
        padding: 0;
        margin: 0 1rem;
        border-radius: 0.4rem;
        position: absolute;
        top: 5.5rem;
        left: 0;
        right: 0;
        background: ${colors.neutral.white};

        ul {
          display: block;
          padding: 1rem 0;

          li {
            text-align: center;
            padding: 1rem 0;

            a {
              color: ${colors.primary.darkBlue};
            }

            &:hover {
              border: 0;
            }
          }
        }
      }
    }
  }
  @media (max-width: ${breakpoints.md}) {
    position: inherit;
    padding: 1.3125rem 0;
  }
`

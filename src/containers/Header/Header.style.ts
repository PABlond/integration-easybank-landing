import { Section } from "../../components"
import styled from "styled-components"
import { breakpoints, colors } from "../../utils"

export const SectionContainer = styled(Section)`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .header-content {
      width: 52.7778%;

      h1,
      p,
      .cta {
        padding: 0 7.5625rem;
      }

      h1 {
        font-size: 3rem;
        color: ${colors.primary.darkBlue};
      }

      p {
        color: ${colors.neutral.grayishBlue};
        line-height: 1.8;
      }

      .cta {
        text-decoration: none;
        margin: 0 7.5625rem;
        margin-top: 2.5rem;
        padding: 1rem 2rem;
        display: block;
        width: fit-content;
      }
    }

    .header-imgs {
      z-index: -1;
      width: 47.2222%;
      position: relative;

      .mockup,
      .bg {
        position: absolute;
      }

      .mockup {
        top: 0;
        left: 17%;
      }

      .bg {
        z-index: -1;
        right: 10%;
        bottom: -5%;
        width: 100%;
      }

      .bg-mobile {
        display: none;
      }
    }

    @media (max-width: ${breakpoints.sm}) {
      display: flex;
      flex-direction: column-reverse;
      z-index: -1;
      margin-bottom: 5.5rem;

      .header-content,
      .header-imgs {
        width: 100%;
      }

      .header-content {
        h1,
        p {
          text-align: center;
          padding: 0 2rem;
        }

        h1 {
          font-size: 2rem;
          font-weight: 400;
          z-index: 123;
        }

        p {
          font-size: 14px;
        }

        .cta {
          margin: auto;
          margin-top: 1.5rem;
        }
      }

      .header-imgs {
        z-index: -1;
        position: relative;

        .mockup {
          position: relative;
          left: 0;
          margin-top: -35%;
        }
      }
    }

    @media (max-width: ${breakpoints.sm}) {
      .header-imgs {
        overflow: hidden;

        .bg-mobile {
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          z-index: -1;
        }

        .bg {
          display: none;
        }
      }
    }
  }
`

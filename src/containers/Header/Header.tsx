import React, { FC } from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Icon, Section, Wrapper } from "../../components"
import styled from "styled-components"
import { colors } from "../../utils"

const SectionContainer = styled(Section)`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .header-content {
      width: 52.7778%;

      h1, p {
        padding: 0 7.5625rem;
      }

      h1 {
        font-size: 3rem;
      }

      p{
        color: ${colors.neutral.grayishBlue}
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


      .bg {
        z-index: -1;

        left: -27%;
        top: -20%;
        width: 100%;
    }
    }

    @media (max-width: 768px) {
      display: block;
      z-index: -1;

      .header-content,
      .header-imgs {
        width: 100%;
      }

      .header-imgs {
        z-index: -1;
        position: inherit;

        .mockup,
        .bg {
          position: absolute !important;
        }

        .bg {
          z-index: -1
      }
    }
  }
`

export const Header: FC = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <div className="header-content">
          <h1>
            Next generation <br />
            digital banking
          </h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
        </div>
        <div className="header-imgs">
          <StaticQuery
            query={graphql`
              query GetHeaderImgs {
                mockup: imageSharp(
                  fluid: { originalName: { eq: "image-mockups.png" } }
                ) {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            `}
            render={({ mockup: { fluid: mockupFluid } }) => {
              return (
                <>
                  <Img className="mockup" fluid={mockupFluid} />
                  <div className="bg">
                    <Icon.HeaderBG />
                  </div>
                </>
              )
            }}
          />
        </div>
      </Wrapper>
    </SectionContainer>
  )
}

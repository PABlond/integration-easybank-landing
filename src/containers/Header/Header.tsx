import React, { FC } from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { ButtonLink, Icon, Wrapper } from "../../components"
import { SectionContainer } from "./Header.style"

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
          <ButtonLink href="#">Request Invite</ButtonLink>
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
                  <div className="bg-mobile">
                    <Icon.HeaderBGMobile />
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

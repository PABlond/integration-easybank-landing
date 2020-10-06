import React, { FC } from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { Section, Wrapper as WrapMe } from "../../components"
import { colors } from "../../utils"

const Wrapper = styled(WrapMe)`
  padding: 6.25rem 7.5625rem;
  background: ${colors.neutral.veryLightGray};

  h2 {
    color: ${colors.primary.darkBlue};
    font-weight: 400;
    margin: 0;
    margin-bottom: 1rem;
  }
`

const Container = styled.div`
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
`

export const Articles: FC = () => {
  return (
    <Section>
      <Wrapper>
        <h2>Latest Articles</h2>

        <StaticQuery
          query={graphql`
            query GetArticlesImgs {
              article1: imageSharp(
                fluid: { originalName: { eq: "image-currency.jpg" } }
              ) {
                fluid(quality: 100, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
              article2: imageSharp(
                fluid: { originalName: { eq: "image-restaurant.jpg" } }
              ) {
                fluid(quality: 100, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
              article3: imageSharp(
                fluid: { originalName: { eq: "image-plane.jpg" } }
              ) {
                fluid(quality: 100, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
              article4: imageSharp(
                fluid: { originalName: { eq: "image-confetti.jpg" } }
              ) {
                fluid(quality: 100, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          `}
          render={({
            article1: { fluid: article1Fluid },
            article2: { fluid: article2Fluid },
            article3: { fluid: article3Fluid },
            article4: { fluid: article4Fluid },
          }) => {
            return (
              <Container>
                <a href="#" className="item">
                  <Img fluid={article1Fluid} />
                  <span>By Claire Robinson</span>
                  <h4>Receive money in any currency with no fees</h4>
                  <p>
                    The world is getting smaller and we’re becoming more mobile.
                    So why should you be forced to only receive money in a
                    single …
                  </p>
                </a>
                <a href="#" className="item">
                  <Img fluid={article2Fluid} />
                  <span>By Wilson Hutton</span>
                  <h4>Treat yourself without worrying about money</h4>
                  <p>
                    Our simple budgeting feature allows you to separate out your
                    spending and set realistic limits each month. That means you
                    …
                  </p>
                </a>
                <a href="#" className="item">
                  <Img fluid={article3Fluid} />
                  <span>By Wilson Hutton</span>
                  <h4>Take your Easybank card wherever you go</h4>
                  <p>
                    We want you to enjoy your travels. This is why we don’t
                    charge any fees on purchases while you’re abroad. We’ll even
                    show you …
                  </p>
                </a>
                <a href="#" className="item">
                  <Img fluid={article4Fluid} />
                  <span>By Claire Robinson</span>
                  <h4>Our invite-only Beta accounts are now live!</h4>
                  <p>
                    After a lot of hard work by the whole team, we’re excited to
                    launch our closed beta. It’s easy to request an invite
                    through the site ...
                  </p>
                </a>
              </Container>
            )
          }}
        />
      </Wrapper>
    </Section>
  )
}

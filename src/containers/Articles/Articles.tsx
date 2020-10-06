import React, { FC } from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Wrapper } from "../../components"
import { Section, Container } from "./Articles.style"

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

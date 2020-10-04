import React from "react"

import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import styled, { createGlobalStyle } from "styled-components"

import { Header, Nav } from "../containers"
import { Types } from "../utils"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Public Sans', sans-serif;
    font-size: 19px;
  }
`

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`

export default ({ data }: { data: { site: Types.Site } }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Container>
        <Nav />
        <Header />
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

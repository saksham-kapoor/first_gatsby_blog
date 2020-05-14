import React from "react"
import { css } from "@emotion/core"
import { Link, graphql, useStaticQuery } from "gatsby"
import { rhythm } from "../utils/typography.js"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <AniLink cover to="/">
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </AniLink>
      <AniLink
        cover
        to="/about/"
        css={css`
          float: right;
        `}
      >
        About
      </AniLink>
      {children}
    </div>
  )
}

export default Layout

import React from 'react'
import Link from 'gatsby-link'
import { Container, Content, Breadcrumb, BreadcrumbItem } from 'bloomer'

export default function ContentPage({ data, location }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Container>
      <Breadcrumb>
        <ul>
          <BreadcrumbItem>
            <Link to="/">🏠</Link>
          </BreadcrumbItem>
          {location.pathname
            .split('/')
            .slice(1, -1)
            .map((crumb, i, crumbs) => (
              // TODO: This isn't quite perfect, and is incorrect on some pages.
              <BreadcrumbItem key={i} isActive={i === crumbs.length - 1}>
                <Link to={'/' + crumbs.slice(0, i + 1).join('/')}>{crumb}</Link>
              </BreadcrumbItem>
            ))}
        </ul>
      </Breadcrumb>
      <Content>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Content>
    </Container>
  )
}

export const pageQuery = graphql`
  query ContentPageByPath($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

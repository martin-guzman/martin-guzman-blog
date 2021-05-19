/*  Index Page
    Description: Page includes Hero component with introduction and list of articles with a limit of 9.
*/
// Import React and Gatsby
import React from 'react'
import { graphql } from 'gatsby'

// Import Utilities and Style Elements
import { Container, HeroIntroduction, HeroTitle, HeroText } from '../elements'

// Import Components
import Layout from '../components/layout'
import SEO from '../components/seo'
// import HeroLinks from '../components/hero/hero-links'
import Hero from '../components/hero/hero'
import ArticleList from '../components/articles/articlelist'

const Index = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} >
    <SEO title={siteTitle} />
      <Hero>
        <HeroText>
          <HeroTitle>Hi, I'm Martin.</HeroTitle>
          <HeroIntroduction>I'm a self-starter and top-ranked NCL CTF competitor, with a strong analytical mindset with skills in OSINT, penetration testing, scripting, security, and experience in multiple OS platforms.</HeroIntroduction>
          <HeroIntroduction>Currently, I am studying for the Offensive Security Certified Professional (OSCP) Certification. Follow along my journey and be my study buddy.</HeroIntroduction>
        </HeroText>
      </Hero>
      <Container>
        <h2>List of Posts</h2>
        <ArticleList posts={posts} key={posts.id} />
      </Container>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, , limit: 9) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`
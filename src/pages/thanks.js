/*  Contact Page
    Description: Basic contact form with Netify
*/
// Import React and Gatsby
import React from 'react'
import { graphql } from 'gatsby'
import { navigateTo } from 'gatsby-link'

// Import Utilities and Style Elements
import { 
  Container, 
} from '../elements';

// Import Components
import Layout from '../components/layout'
import SEO from '../components/seo'

const ThanksPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <Container>
        <h1>Thank you!</h1>
        <p>This is a custom thank you page for form submissions</p>
      </Container>
    </Layout>
  )
}
export default ThanksPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
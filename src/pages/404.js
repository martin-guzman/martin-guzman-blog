import React from "react"
import PropTypes from 'prop-types'

// Import Utilities and Style Elements
import { Container, } from '../elements'

// Import Components
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <Container>
      <h1>404: Not Found</h1>
      </Container>
    </Layout>
  )
}

NotFoundPage.propTypes = {
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }),
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
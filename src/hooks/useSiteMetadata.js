// Hook for siteMetaData Elements
import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            siteUrl
            menuLinks {
              name
              slug
            }
            externalLinks {
              name
              url
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
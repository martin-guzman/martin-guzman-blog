/* Tag List
*/
// Import React and Gatsby
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

// Import Utilities and Style Elements
import { 
  Container,
  ContainerCardGrid,
  CardLink,
  Card,
  CardBorder,
  CardTagList,
  CardReadMoreContainer,
  CardTitle,
  CardReadMore,
  CardReadMoreArrow,
  ViewAllButton,
  ViewAllLink,
  ViewAllArrow,
  ViewAllText,
} from '../elements'

// Import Components
import Layout from "../components/layout"
import ArrowSVG from '../components/svg/svgarrow'

const Tags = ({ pageContext, data }) => {
  
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagList = `${tag}`
  const tagHeader = `${tag} Article${
    totalCount === 1 ? "" : "s"}`

  return (
    <Layout>
      <Container>
        <h1>{tagHeader}</h1>
        <ContainerCardGrid>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter

            return (
              <li key={slug} >
                <CardLink to={`/articles${slug}`}>
                  <Card>
                  <CardBorder />
                  <CardTagList>{tagList}</CardTagList>
                  <CardTitle>{title}</CardTitle>
                  <CardReadMoreContainer>
                    <CardReadMore>Read Article</CardReadMore>
                      <CardReadMoreArrow>
                        <ArrowSVG />
                      </CardReadMoreArrow>
                  </CardReadMoreContainer>
                  </Card>
                </CardLink>
              </li>
            )
          })}
        </ContainerCardGrid>

        <ViewAllButton>
          <ViewAllLink to="/articles/tags">
          <ViewAllText>View All Article Categories</ViewAllText>
            <ViewAllArrow>
              <ArrowSVG />
            </ViewAllArrow>
          </ViewAllLink>  
        </ViewAllButton>

      </Container>       
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        fileAbsolutePath: { regex: "/content/blog/" }
        frontmatter: { 
          tags: { in: [$tag] }, 
          published: { eq: true } 
        } 
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`
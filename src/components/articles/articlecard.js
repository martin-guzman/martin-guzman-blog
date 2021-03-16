/*  Article Card Component
    Creates an Article Card containing the .md title and tags frontmatter. 
    The card's link is generated from the fields slug.
*/
// Import React and Gatsby Elements
import React from 'react'
import PropTypes from 'prop-types'

// Import Utilities and Style Elements
import { 
  CardLink,
  Card,
  CardBorder,
  CardTagList,
  CardTitle,
  CardReadMoreContainer,
  CardReadMore,
  CardReadMoreArrow,
} from '../../elements/'

// Import Components
import ArrowSVG from '../svg/svgarrow'
import TagList from '../taglist';

const Article = ({ frontmatter, fields }) => {

  const { tags = [], title } = frontmatter

  return (
    <div>
   	  <CardLink to={`/articles${fields.slug}`} key={title}>
        <Card >
          <CardBorder />
          <CardTagList>
            <TagList tags={tags} />
          </CardTagList>
          <CardTitle>{title}</CardTitle>
          <CardReadMoreContainer>
            <CardReadMore>Read Article</CardReadMore>
            <CardReadMoreArrow>
              <ArrowSVG />
            </CardReadMoreArrow>
          </CardReadMoreContainer>
        </Card>
      </CardLink>
    </div>
  )
}

Article.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }),
}

export default Article
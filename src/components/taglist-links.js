/*  List of Article Tags with Links Component
    Each tag is linked to a page of it's respective tagged name.
*/
import React from 'react'
import PropTypes from 'prop-types'

 // Utilities and Style Elements
import kebabCase from 'lodash/kebabCase'
import { HeroTagLinks } from '../elements/'

const TagListLinks = props => {
  return (
    <div>
      {props.tags.map((tag) => (
        <div key={tag}>
          <HeroTagLinks to={`/articles/tags/${kebabCase(tag)}/`}>{tag}</HeroTagLinks>
        </div>
      ))}
    </div>
  )
}

TagListLinks.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default TagListLinks
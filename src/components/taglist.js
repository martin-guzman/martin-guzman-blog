/*  Taglist Component
    Description: Tag list items from Article Card. 
    For Tag list with links, see TagListLinks Component in taglist-links.js
*/
// Import React and Gatsby
import React from 'react'

const TagList = props => {
  return (
    <React.Fragment>
      {props.tags.map((tag) => (
        <div key={tag}>{tag}</div>
      ))}
    </React.Fragment>
  )
}

export default TagList
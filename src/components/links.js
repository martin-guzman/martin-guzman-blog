/*  Global Nav Links Component
    Links are generated from siteMetaData menuLinks[] information in gatsby-config.js   
*/
// Import React and Gatsby Elements
import React from 'react'
// import PropTypes from 'prop-types'

// Import Utilities and Style Elements
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { ContainerMenu, HrefNavLink, InternalLink } from '../elements/'

const LinksNav = ({ props, isActive }) => {
  const { menuLinks, externalLinks } = useSiteMetadata()

  // Style for Active and Nested Active Nav Links
   const activeStyles = {
     color: '#4337C8',
     borderBottom: '2px solid #4337C8',
   }
   
  return (
    <ContainerMenu>
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <InternalLink
              to={link.slug} 
              aria-label="Navigation"
              role="button"
              activeStyle={activeStyles} 
              getProps={({ isPartiallyCurrent }) =>
              isPartiallyCurrent ? { style: { ...activeStyles } } : null
              }
            >
              {link.name}
            </InternalLink>
          </li>
        ))}

        {externalLinks.map(link => (
          <li key={link.name}>
            <HrefNavLink
              href={link.url}           
              aria-label="Navigation"
              role="button"
              target="_blank"
            >
              {link.name}
            </HrefNavLink>
          </li>
        ))}
      </ul>
    </ContainerMenu>
  )
}

export default LinksNav
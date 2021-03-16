/*  Index Page Hero Link Component
    Links are generated from siteMetaData menuLinks[] information in gatsby-config.js
*/
// Import React and Gatsby Elements
import React from 'react'

// Import Utilities and Style Elements
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { HeroLinksContainer, HeroInternalLink, HeroHrefNavLink } from '../../elements/'

const HeroLinks = ({ props, isActive }) => {
  const { menuLinks, externalLinks } = useSiteMetadata()
  
  return (
    <HeroLinksContainer>
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <HeroInternalLink
              to={link.slug} 
              aria-label="Navigation"
              role="button"
            >
              {link.name}
            </HeroInternalLink>
          </li>
        ))}

        {externalLinks.map(link => (
          <li key={link.name}>
            <HeroHrefNavLink
              href={link.url}           
              aria-label="Navigation"
              role="button"
              target="_blank"
            >
              {link.name}
            </HeroHrefNavLink>
          </li>
        ))}
      </ul>
    </HeroLinksContainer>
  )
}

export default HeroLinks
 /* Hero Component
  	Description: Hero Template for post and pages.
*/
// Import React and Gatsby Elements
import React from 'react'

// Import Utilities and Style Elements
import { HeroContainer, HeroContent } from '../../elements/'

// Import Components
import HeroParticle from './hero-particle'

 const Hero = ({ children }) => {
   return (
     <HeroContainer>
      <HeroContent>
        {children}
      </HeroContent>
       <HeroParticle />
     </HeroContainer>
   )
 }
 
 export default Hero
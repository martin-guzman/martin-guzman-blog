/* 	Footer Component
		Contains Copyright and LinkNav Component (Global Navigation).
*/
// Import React and Gatsby Elements
import React from 'react'

// Import Utilities and Style Elements
import { ContainerFooter } from '../../elements/'

// Import Components
import Copyright from './copyright'
import LinksNav from '../links'

const Footer = () => {
  return (
    <ContainerFooter>
      <Copyright />
      <LinksNav aria-label="Footer" />
    </ContainerFooter>
  )
}
export default Footer

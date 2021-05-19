/*  Layout Components
    siteMetaData information from gatsby-config.js
*/
// Import React and Gatsby Elements
import React from 'react'

// Import Components
import Header from './header/header'
import Footer from './footer/footer'

const Layout = ({ location, title, children }) => {

  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
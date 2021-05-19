/*  About Page
    Description: Page for About information with Table of Contents.
*/
// Import React and Gatsby
import React from 'react'
import { graphql } from 'gatsby'
//import PropTypes from 'prop-types'

// Import Utilities and Style Elements
import { 
  Container, 
  ContainerTwoColumns, 
  ContainerAbout, 
  HeroIntroduction, 
  ListIcon, 
  HrefLink, 
  HeroText,
  HeadingThree,
  HeadingFour,
  ParagraphInfo,
  ParagraphDate,
  Footnote,
  SupElement,
} from '../elements';

// Import Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero/hero'
import StickyContainer from '../components/stickycontainer'
import ToCAbout from '../components/toc-about.js'

const AboutPage = ({ data, location }) => {

  return (
    <Layout id="introduction" location={location}>
      <SEO title="About" />
      <Hero>
        <HeroText>
          <h1>Hi I'm Martin.</h1>
          <HeroIntroduction>I'm a self-starter and top-ranked NCL CTF competitor, with a strong analytical mindset with skills in OSINT, penetration testing, scripting, security, and experience in multiple OS platforms. I have a passion for Cybersecurity, OSINT, CTF's and interested in making a difference.</HeroIntroduction>
          <HeroIntroduction>Authorized to work in Canada and the United States.</HeroIntroduction>
        </HeroText>
      </Hero>

      <Container>
        <ContainerTwoColumns>
          <ContainerAbout>
            <section id="overview">
              <p>Originally from Southern California, now living in Vancouver, BC, I'm currently working towards my OSCP Certification. </p> 
            </section>
            <section id="ncl-highlights">
              <h2 id="ncl">NCL & CTFs Highlights</h2>
              <p></p>
              <h3>National Cyber League Highlights</h3>
              <p>modifying exhisting tools to meet requirements</p>
              <h4>Fall 2020 Individual Ranking Highlights</h4> 
              <ListIcon>
                <li>Top 500 Individual Games Medalist: 7.35% Overall Ranking</li>
                <li>Top 1% Open Source Intelligence Module (22nd of 6011)</li>
                <li>Top 1% Password Cracking Module (53rd of 6011)</li>
                <li>Top 3% Cryptography Module</li>
              </ListIcon> 
              <HrefLink href="https://cyberskyline.com/verify/BPK24EA0TCQM" target="_blank">Cyber Skyline Certificate of Authentication Report</HrefLink><br />
              <HrefLink href="https://cyberskyline.com/report/PEE4AFLRCLF8" target="_blank">Cyber Skyline Authentication Report</HrefLink>
              <h3>Spring 2020 Individual Ranking Highlights</h3>         
              <ListIcon>
                <li>Top 1% Open Source Intelligence Module</li>
                <li>Top 5% Network Traffic Analysis Module</li>
                <li>Top 9% Scanning & Reconnaissance Module</li>
              </ListIcon> 
              <HrefLink href="https://cyberskyline.com/verify/BWTXLEAAFD6K" target="_blank">Certificate of Participation Report</HrefLink><br />
              <HrefLink href="https://cyberskyline.com/report/D2LGABQF7JEQ" target="_blank">Individual Game Report</HrefLink>
              <h3>Trace Labs Global OSINT Search Party CTF 2021.02</h3>
              <p>Trace Labs is a Not-For-Profit organization with the mission of crowdsourcing the collection of OSINT to generate new leads on missing persons cases to assist law enforcement.</p>
              <p>Participating in this event was ...</p>
            </section> 
            <section id="education">
              <h2>Education Highlights</h2> 
              <HeadingThree>Associates of Science in Cyber Security</HeadingThree>
              <ParagraphInfo>Coastline Community College<SupElement>*</SupElement> | Fountain Valley, California</ParagraphInfo>
              <ParagraphDate>July 2019 to May 2020 | President List Recipient</ParagraphDate>
              <HeadingFour>Program Certificates</HeadingFour>  
              <ListIcon>
                <li>Certificate of Achievement CyberSecurity</li>
                <li>Certificate of Specialization in CyberSecurity: Computer Network</li>
                <li>Certificate of Accomplishment CyberSecurity Fundamentals</li>
                <li>Certificate of Accomplishment Penetration Testing</li>
                <li>Certificate of Achievement Network Technician</li>
              </ListIcon>
              <Footnote><SupElement>*</SupElement>Coastline Community College is a designated Center for Academic Excellence in Information Assurance and Cyber Defense for two-year institutions (CAE2Y) by the National Security Agency (NSA) and the Department of Homeland Security (DHS).</Footnote> 
              <HeadingThree>CIS: Computer Networking</HeadingThree>
              <ParagraphInfo>Orange Coast College | Orange, California</ParagraphInfo>
              <ParagraphDate>September 2001 to May 2003</ParagraphDate>
              <HeadingFour>Program Certificates</HeadingFour>  
              <ListIcon>
                <li>Certificate of Computer Networking</li>
              </ListIcon>
            </section>         
          </ContainerAbout>
          <StickyContainer>
            <ToCAbout /> 
          </StickyContainer>
        </ContainerTwoColumns>
      </Container>
    </Layout>
  )
}


export default AboutPage

export const pageQuery = graphql`
  query About {
    site {
      siteMetadata {
        title
      }
    }
  }
`
// Styles for for Hero Component
import { Link } from 'gatsby'
import styled from 'styled-components'
import {InternalLink} from './links-hrefs'

export const HeroContainer = styled.div`
  margin: 0 auto;
	position: relative;
	width: 100%;
	height: 70vh;
	overflow: hidden;
	z-index: 1;
	border-bottom: 1px solid ${props => props.theme.colors.purple4};
 
	@media only screen and (min-width : 768px) {
		height: 60vh;
	}
`

export const HeroContent = styled.div`
  position: absolute;
  display: flex;
  flex-flow: rows nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const HeroText = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding: .5rem;
  width: ${props => props.theme.sizes.maxWidth};
  z-index: 50; 
`
export const HeroContainerTagList = styled.div`
  align-self: flex-start;
  font-weight: 400;
  line-height: 1.5rem;
  padding-bottom: calc(8px + (16 - 4) * (100vw - 600px) / (1200 - 600));
`

export const HeroTitle = styled.h1`
  max-width: ${props => props.theme.sizes.maxTitle};
  padding-bottom: .5rem;
`

export const HeroModuleInfo = styled.h2`
  align-self: flex-start;
  color: ${props => props.theme.colors.purple2};
  font-size: 0.85rem;
  line-height: 1.5rem;
  text-transform: capitalize;
  margin-bottom: 0;
  padding-bottom: 0;
`

export const HeroArticleInfo = styled.p`
  align-self: flex-start;
  color: black;
  font-size: 0.85rem;
  line-height: 1.5rem;
  text-transform: capitalize;
  margin-bottom: 0;
  padding-top: calc(16px + (16 - 8) * (100vw - 600px) / (1200 - 600));
  padding-bottom: 0;
`

export const HeroIntroduction = styled(HeroArticleInfo)`
	font-weight: 400;
  max-width: 27rem;
  text-transform: none;
`

export const HeroTagLinks = styled(InternalLink)`
  color: ${props => props.theme.colors.grey2};
  font-size: 0.85rem;
  font-weight: 400;
  text-decoration: none;
  text-transform: capitalize;
  position: relative;
  transition: all 200ms ease-in-out;

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    top: 100%;
    left: 0;
    background: ${props => props.theme.colors.purple1};
    transition: transform 500ms;
    transform: scaleX(0);
    transform-origin: right;
  }

  &:hover {
    color: ${props => props.theme.colors.purple1};
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`

// Index Page Hero
export const HeroLinksContainer = styled.nav`    
  justify-content: flex-start;
  width: 100%;
  padding-bottom: .35rem;

  ul {
    display: flex;
    flex-flow: row no-wrap;
    flex-flow: column no-wrap;
  }
  li {
    display: inline-block;
    margin-right: .75em;

    &:first-of-type {
      display: none;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`

export const HeroInternalLink = styled(Link)`
  cursor: pointer;
  color: ${props => props.theme.colors.purple5};
  background: ${props => props.theme.colors.purple2};
  box-shadow: ${props => props.theme.shadows.shadow};
  font-size: .75rem;
  padding: .16rem .34rem;
  text-decoration: none;
  border-radius: 2px 2px 0px 0;
  border-bottom: 2px solid ${props => props.theme.colors.purple2};
  transition: all 500ms ease-in-out;
  
  &:hover {
    color: ${props => props.theme.colors.purple1};
    background: ${props => props.theme.colors.purple4};  
    border-bottom: 2px solid ${props => props.theme.colors.purple3};
  }
`

export const HeroHrefNavLink = styled.a`
  cursor: pointer;
  color: ${props => props.theme.colors.purple5};
  background: ${props => props.theme.colors.purple2};
  box-shadow: ${props => props.theme.shadows.shadow};
  font-size: .75rem;
  padding: .16rem .34rem;
  text-decoration: none;
  border-radius: 2px 2px 0px 0;
  border-bottom: 2px solid ${props => props.theme.colors.purple2};
  transition: all 500ms ease-in-out;
  
  &:hover {
    color: ${props => props.theme.colors.purple1};
    background: ${props => props.theme.colors.purple4};  
    border-bottom: 2px solid ${props => props.theme.colors.purple3};
  }
`
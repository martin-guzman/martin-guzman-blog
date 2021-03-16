/* Styles for Table of Content Elements for About and Article pages.
	The components are imported and exported to .src/elements/index.js. 
*/
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import styled from 'styled-components'

export const TocHeader = styled.h2`
  color: ${props => props.theme.colors.grey1};
  font-size: .65rem;
  line-height: 1rem;
  padding: 0;
`

export const TocUl = styled.ul`
  border-left: 1px solid ${props => props.theme.colors.purple3}; 
  padding-left: 15px;
`

export const TocLi = styled.li`
  list-style: none;
  color: ${props => props.theme.colors.purple2};
  color: #3534a0;
  line-height: 1.15em;
`

export const TocAnchorLink = styled(AnchorLink)`
  color: ${props => props.theme.colors.purple2};
  color: #3534a0;
  font-size: calc(16px + (2 - 2) * (100vw - 600px) / (1200 - 600));
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

export const TocLink = styled.a`
  color: ${props => props.theme.colors.purple1};
  color: #3534a0;
  font-size: calc(16px + (2 - 2) * (100vw - 600px) / (1200 - 600));
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
    color: #3534a0;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`
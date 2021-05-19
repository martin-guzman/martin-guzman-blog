// Styles for for Containers
import styled from 'styled-components'
 
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	padding: .25rem 1rem;
	width: 100%;
	max-width: ${props => props.theme.sizes.maxWidth};

	@media (min-width: 35rem) {
		padding: .25rem .5rem;
	}
`
export const ContainerArticleNavigation = styled(Container)`
  border-top: 1px solid ${props => props.theme.colors.purple3};
`

export const ContainerTwoColumns = styled.div`
  display: grid;
  grid-template-areas:
    'toc'
    'article';
  grid-auto-flow: dense;
  row-gap: 1rem;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};

  @media (min-width: 800px) {
    grid-template-areas:
      'article toc';
    grid-gap: 1rem;
    row-gap: 0;
  }
`

export const ContainerAside = styled.aside`

`

export const ContainerAbout = styled.div`
  grid-area: article;
  padding-bottom: calc(32px + (16 - 8) * (100vw - 600px) / (1200 - 600));
  width: 100%;

  @media (min-width: 800px) {
    padding-top: 1rem;
  }
`

export const ContainerCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 0rem;
  list-style-type: none;

  li {
    list-style-type: none;
  }

  @media (min-width: 35rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 55rem) {
    grid-template-columns: repeat(3, 1fr);
  }
`
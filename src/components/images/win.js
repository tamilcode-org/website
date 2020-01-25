import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const StyledImage = styled(Img)``;

export default () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "mentorship/win.png" }) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <StyledImage fluid={data.image.childImageSharp.fluid} />}
  />
);

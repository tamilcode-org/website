import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;


const About: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                tamilcode.org was started to teach, learn, acquire and distribute different knowledge and skills in Tamil language.
              </p>
              <blockquote>
                <p>
                  The best way to learn is by teaching - Frank oppenheimer
                </p>
              </blockquote>
              <p>tamilcode.org is interested mainly in teaching</p>
              <ul>
                <li>Aptitude skills</li>
                <li>Logical reasoning</li>
                <li>Maths and Science</li>
                <li>Technology</li>
                <li>Engineering</li>
                <li>Puzzles</li>
                <li>Programming (computer coding)</li>
                <li>Riddles</li>
                <li>Tamil Stories</li>
              </ul>
              <blockquote>
                <p>
                  Thoroughly to teach another is the best way to learn for yourself - Tryon Edwards
                </p>
              </blockquote>
              <p>Everything in the site is taught through small quiz, blogs and video based content. Check out our youtube channels for more updates in tamil.</p>
              <p>Spread the knowledge via tamil language and help us contribute more by contributing content to our site.</p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;

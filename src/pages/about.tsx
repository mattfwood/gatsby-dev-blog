import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

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

const ImageSubtitle = styled.div`
  text-align: center;
  margin-bottom: 30px;
  font-size: 80%;
`;

const About: React.FC = () => (
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
            <img src="https://imgs.xkcd.com/comics/the_general_problem.png" alt="XKCD Comic 'The General Problem'" style={{ marginBottom: 0 }} />
            <ImageSubtitle>
              <a href="https://xkcd.com/974/">Courtesy of XKCD</a>
            </ImageSubtitle>
            <div className="post-content">
              <p>
                My name's Matt Wood, I'm a self-taught, full-stack developer from Dallas, Texas. I specialize in front-end engineering, specifically with React and creating Javascript tools. I've also written a fair amount of Python for Raspberry Pi projects.
              </p>
              <p>
                I spend my free time starting more projects than I'll ever be able to finish and learning as much as I can along the way.
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;

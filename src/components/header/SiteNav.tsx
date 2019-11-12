// tslint:disable:no-http-string
import { Link } from 'gatsby';
import * as React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';

import { SocialLink } from '../../styles/shared';
import config from '../../website-config';
import Facebook from '../icons/facebook';
import Twitter from '../icons/twitter';
import SubscribeModal from '../subscribe/SubscribeOverlay';
import SiteNavLogo from './SiteNavLogo';
import { HomeNavRaise, SiteNavStyles, NavStyles } from './SharedStyles';

const { useRef } = React;

const SiteNavLeft = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  margin-right: 10px;
  padding-bottom: 80px;
  letter-spacing: 0.4px;
  white-space: nowrap;

  -ms-overflow-scrolling: touch;

  @media (max-width: 700px) {
    margin-right: 0;
    padding-left: 4vw;
  }
`;

const SiteNavRight = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 40px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const SocialLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  a:last-of-type {
    padding-right: 20px;
  }
`;

const SubscribeButton = styled.a`
  display: block;
  padding: 4px 10px;
  border: #fff 1px solid;
  color: #fff;
  font-size: 1.2rem;
  line-height: 1em;
  border-radius: 10px;
  opacity: 0.8;

  :hover {
    text-decoration: none;
    opacity: 1;
    cursor: pointer;
  }
`;

interface SiteNavProps {
  isHome?: boolean;
  pages?: any;
}

const TAG_QUERY = graphql`
  query TAG_QUERY {
    allTagYaml {
      edges {
        node {
          id
        }
      }
    }
  }
`;

function SiteNav(props: SiteNavProps) {
  const { isHome = false } = props;
  const data = useStaticQuery(TAG_QUERY);

  console.log({ data });

  const tags = data.allTagYaml.edges.map((edge: any) => edge.node.id);
  console.log({ tags });

  const subscribeRef = useRef(null);

  function openModal() {
    if (subscribeRef && subscribeRef !== null) {
      subscribeRef.current.open();
    }
  }

  return (
    <nav css={[isHome && HomeNavRaise, SiteNavStyles]}>
      <SiteNavLeft>
        {!isHome && <SiteNavLogo />}
        <ul css={NavStyles} role="menu">
          {/* TODO: mark current nav item - add class nav-current */}
          <li role="menuitem">
            <Link to="/">Home</Link>
          </li>
          <li role="menuitem">
            <Link to="/about">About</Link>
          </li>
          {tags.map((tag: string) => (
            <li key={tag} role="menuitem">
              <Link to={`/tags/${tag.toLowerCase()}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </SiteNavLeft>
      <SiteNavRight>
        <SocialLinks>
          {config.facebook && (
            <a
              css={SocialLink}
              href={config.facebook}
              target="_blank"
              title="Facebook"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          )}
          {config.twitter && (
            <a
              css={SocialLink}
              href={config.twitter}
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
          )}
        </SocialLinks>
        {config.showSubscribe && (
          <SubscribeButton onClick={openModal}>Subscribe</SubscribeButton>
        )}
        {config.showSubscribe && <SubscribeModal ref={subscribeRef} />}
      </SiteNavRight>
    </nav>
  );
}

// class SiteNav extends React.Component<SiteNavProps> {
//   subscribe = React.createRef<SubscribeModal>();

//   openModal = () => {
//     if (this.subscribe.current) {
//       this.subscribe.current.open();
//     }
//   };

//   render() {
//     console.log(this.props);
//     const { isHome = false, pages = [] } = this.props;

//     const allTags = pages.filter((page: any) => page.node.path.startsWith('/tags/')).map((page: any) => ({
//       path: page.node.path,
//       name: page.node.context.tag,
//     }));
//     return (
//       <nav css={[isHome && HomeNavRaise, SiteNavStyles]}>
//         <SiteNavLeft>
//           {!isHome && <SiteNavLogo />}
//           <ul css={NavStyles} role="menu">
//             {/* TODO: mark current nav item - add class nav-current */}
//             <li role="menuitem">
//               <Link to="/">Home</Link>
//             </li>
//             <li role="menuitem">
//               <Link to="/about">About</Link>
//             </li>
//             {allTags.map((tag: any) => (
//               <li key={tag.id} role="menuitem">
//                 <Link to={tag.path}>{tag.name}</Link>
//               </li>
//             ))}
//           </ul>
//         </SiteNavLeft>
//         <SiteNavRight>
//           <SocialLinks>
//             {config.facebook && (
//               <a
//                 css={SocialLink}
//                 href={config.facebook}
//                 target="_blank"
//                 title="Facebook"
//                 rel="noopener noreferrer"
//               >
//                 <Facebook />
//               </a>
//             )}
//             {config.twitter && (
//               <a
//                 css={SocialLink}
//                 href={config.twitter}
//                 title="Twitter"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Twitter />
//               </a>
//             )}
//           </SocialLinks>
//           {config.showSubscribe && (
//             <SubscribeButton onClick={this.openModal}>Subscribe</SubscribeButton>
//           )}
//           {config.showSubscribe && <SubscribeModal ref={this.subscribe} />}
//         </SiteNavRight>
//       </nav>
//     );
//   }
// }

export default SiteNav;

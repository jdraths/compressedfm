import Link from 'next/link';
import { format } from 'date-fns';
import styled from 'styled-components';

// components
import { Breakpoints } from 'styles/Breakpoints';
import { Constants } from 'utils/constants';
import { SocialMedia } from '../SocialMedia';
import { VerticalDivider } from '../VerticalDivider';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Footer = ({ footerLinks }) => {
  const getCurrentYear = () => format(new Date(), 'yyyy');
  console.log('in footer', getCurrentYear());
  return (
    <StyledFooter>
      <VerticalDivider className="vertical-divider" />
      {/* TODO: update social links */}
      <SocialMedia
        className="social-media"
        // instagram={Constants.COMPRESSEDFM_INSTAGRAM_URL}
        // github={Constants.COMPRESSEDFM_GITHUB_URL}
        twitter={Constants.ALTUS_TWITTER_URL}
        // rss={Constants.COMPRESSEDFM_RSS}
      />

      {/* TODO: they had links about legal disclaimers, terms of use, privacy policy */}
      <div className="links-wrapper">
        {footerLinks && footerLinks.length > 0 && (
          <div className="legal">
            <ul>
              {footerLinks.map((link) => (
                <li key={link._id}>
                  <Link href={`/legal/${link.slug.current}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="copyright">
          <span className="line">Copyright &copy;{getCurrentYear()}. Altus Talks</span>{' '}
          <span className="line">All Rights Reserved.</span>
        </div>
      </div>
    </StyledFooter>
  );
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledFooter = styled.footer`
  padding: 0 ${(props) => props.theme.mobilePadding};
  text-align: center;

  @media (${Breakpoints.portrait}) {
    padding: 0;
  }

  .vertical-divider {
    margin-bottom: 90px;
  }

  .social-media {
    a {
      color: ${(props) => props.theme.mediumOrchard};

      &:hover {
        color: ${(props) => props.theme.yellow};
      }
    }

    svg {
      height: 32px;
      width: 32px;
    }
  }

  .links-wrapper {
    border-top: 1px solid #454545;
    padding: 40px 0 65px;
    color: ${(props) => props.theme.white};
    font-size: 1.6rem;
    font-family: ${(props) => props.theme.mono};
  }

  .legal {
    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      text-transform: uppercase;
      padding: 0;
      margin: 0 0 20px;
      flex-direction: column;

      // add stars between links
      @media (${Breakpoints.small}) {
        flex-direction: row;

        li {
          &:first-child:before {
            content: '*';
            margin: 0 10px 0 0;
          }

          &:after {
            content: '*';
            margin: 0 10px;
          }
        }
      }

      // add vertical spacing for mobile
      li {
        margin-bottom: 10px;

        @media (${Breakpoints.small}) {
          margin: 0;
        }
      }

      a {
        color: ${(props) => props.theme.white};

        &:hover {
          color: ${(props) => props.theme.yellow};
          text-decoration: none;
        }
      }
    }
  }

  .copyright {
    font-style: italic;
    text-align: center;
    margin: 0 auto;
    max-width: 1245px;
    position: relative;

    .line {
      white-space: nowrap;
    }
  }
`;

export { Footer };

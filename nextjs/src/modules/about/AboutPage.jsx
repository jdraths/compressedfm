import { Newsletter } from 'src/modules/shared/components/Newsletter';
import { VerticalDivider } from 'src/modules/shared/components/VerticalDivider';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import Image from 'next/image';
import { MixinSectionHeading, MixinBodyCopy, MixinLargeBodyCopy } from 'src/styles/Typography';
import { serializers } from 'src/modules/shared/blockContent/Serializers';
import { EpisodeGrid } from 'src/modules/shared/components/EpisodeGrid';
import { HorizontalDivider } from 'src/modules/shared/components/HorizontalDivider';
import { WaveformPlayer } from 'src/modules/shared/components/AudioPlayer/WaveformPlayer';
import { Breakpoints } from 'src/styles/Breakpoints';
import { TheHosts } from 'src/modules/home/components/TheHosts';
import Link from 'next/link';
import { Faq } from './components/Faq';
import { ColophonColor } from './components/ColophonColor';
import { TypeSample } from './components/TypeSample';

const AboutPage = ({ faqs, gettingStarted, mostPopular, siteSettings }) => (
  <StyledAboutPage>
    {/* reasons */}
    {/* <section className="reasons">
      <h2>
        <span>Why</span> did we start this show?
      </h2>
      <ol>
        {siteSettings &&
          siteSettings.reasonsBehind.map((item, index) => (
            <li key={index}>
              <BlockContent blocks={item.reason} serializers={serializers} />
            </li>
          ))}
      </ol>
    </section> */}
    <TheHosts />
    {/* where to begin? */}
    <section className="begin">
      <EpisodeGrid header="Where to Begin?" episodes={gettingStarted} />
    </section>

    {/* most popular episodes */}
    <VerticalDivider />
    <section className="most-popular">
      <EpisodeGrid header="Most Popular Episodes" episodes={mostPopular} />
    </section>
    <VerticalDivider />

    {/* colophon */}
    {/* <section className="colophon">
      <div className="section-heading__wrapper">
        <h2 className="section-heading">Colophon</h2>
        <p className="large-body">Since we're web designers and developers, we care about this sort of thing.</p>
        <p>
          The website is built on{' '}
          <Link href="https://nextjs.org/" target="_blank" rel="noreferrer">
            {' '}
            Next.js
          </Link>{' '}
          and{' '}
          <Link href="https://sanity.io/" target="_blank" rel="noreferrer">
            {' '}
            Sanity
          </Link>{' '}
          and hosted on{' '}
          <Link href="https://vercel.com/" target="_blank" rel="noreferrer">
            {' '}
            Vercel
          </Link>
          .
        </p>
        <div className="logo-line">
          <Image src="/images/logo__nextjs@2x.png" alt="Next.js" width="182" height="114" />
          <Image src="/images/logo__sanity@2x.png" alt="Sanity" width="191" height="38" />
          <Image src="/images/logo__vercel@2x.png" alt="Vercel" width="240" height="60" />
        </div>
        <h4>Colors</h4>
        <div className="colors">
          <ColophonColor color="#ffffff" />
          <ColophonColor color="#000000" border="#444444" />
          <ColophonColor color="#484848" />
          <ColophonColor color="#FAFF00" />
          <ColophonColor color="#8C59FF" />
        </div>
        <h4>Typography</h4>
        <div className="typography">
          <div className="greyclif">
            <h5>Greyclif</h5>
            <TypeSample />
          </div>
          <div className="dank-mono">
            <h5>Dank Mono</h5>
            <TypeSample />
          </div>
        </div>
      </div>

      <HorizontalDivider length="short" />

    </section> */}

    {/* frequently asked questions */}
    {faqs.length > 0 && (
      <section className="faqs">
        <div className="section-heading__wrapper">
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </div>
        {faqs.map((faq) => (
          <Faq key={faq._id} question={faq.question} answer={faq.answer} />
        ))}
      </section>
    )}
    {/* <VerticalDivider />
    <Newsletter /> */}
  </StyledAboutPage>
);

const StyledAboutPage = styled.div`
  .section-heading__wrapper {
    text-align: center;
  }

  h2.section-heading {
    ${MixinSectionHeading};
    margin: 36px 0 64px;
  }

  .reasons {
    margin: 0 ${(props) => props.theme.mobilePadding};
    max-width: ${(props) => props.theme.narrowPageWidth};

    @media (${Breakpoints.medium}) {
      margin: 0 auto;
    }

    h2 {
      color: ${(props) => props.theme.white};
      font-family: ${(props) => props.theme.sansSerif};
      font-size: 3.2rem;
      font-weight: ${(props) => props.theme.fontBlack};

      @media (${Breakpoints.medium}) {
        font-size: 4.8rem;
      }

      span {
        color: ${(props) => props.theme.yellow};
      }
    }

    ol {
      counter-reset: reasons-list;
      list-style-type: none;
      padding-left: 0;

      @media (${Breakpoints.medium}) {
        padding-left: 40px;
      }

      li {
        padding: 1rem 0 2.5rem 4.2rem;
        position: relative;

        @media (${Breakpoints.medium}) {
          padding: 1rem 0 2.5rem 7.5rem;
        }
      }

      li:before {
        color: ${(props) => props.theme.lavenderIndigo};
        content: counter(reasons-list);
        counter-increment: reasons-list;
        font-family: ${(props) => props.theme.sansSerif};
        font-size: 5.2rem;
        font-weight: ${(props) => props.theme.fontBlack};
        left: 0;
        line-height: 1;
        position: absolute;
        top: 0;

        @media (${Breakpoints.medium}) {
          font-size: 8.5rem;
        }
      }
    }

    h3 {
      ${MixinLargeBodyCopy}
    }

    p {
      ${MixinBodyCopy}
    }
  }

  .colophon {
    margin: 0 25px 50px;
    max-width: ${(props) => props.theme.narrowPageWidth};

    @media (${Breakpoints.medium}) {
      margin: 0 auto 50px;
    }

    .two-up {
      display: flex;
      gap: 10px;
      flex-direction: column-reverse;

      @media (${Breakpoints.small}) {
        flex-direction: row;
        gap: 100px;
      }

      div {
        flex: 1;
      }
    }

    .colors {
      display: flex;
      justify-content: space-between;
    }

    h3 {
    }

    .large-body {
      ${MixinLargeBodyCopy}
    }

    p {
      ${MixinBodyCopy};
      text-align: left;

      a {
        color: ${(props) => props.theme.yellow};
        font-weight: bold;
        text-decoration: underline;

        &:hover {
          color: ${(props) => props.theme.white};
        }
      }
    }

    .logo-line {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin: 40px 0 100px 0;
    }

    h4 {
      font-family: ${(props) => props.theme.mono};
      color: ${(props) => props.theme.yellow};
      text-transform: uppercase;
      font-size: 1.8rem;
      text-align: left;
    }

    .colors {
      margin-bottom: 65px;
    }

    .typography {
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 40px;
      text-align: left;
      font-size: 2.2rem;
      line-height: 1.2;

      @media (${Breakpoints.medium}) {
        grid-template-columns: 1fr 1fr;
      }

      h5 {
        font-size: 3.6rem;
        line-height: 1.2;
        margin: 0 0 10px;
        padding: 0;
      }

      .greyclif {
        font-family: ${(props) => props.theme.sansSerif};
        font-weight: bold;
      }

      .dank-mono {
        font-family: ${(props) => props.theme.mono};
      }
    }
  }

  .faqs {
    margin: 0 auto;
    max-width: ${(props) => props.theme.narrowPageWidth};
  }
`;

export { AboutPage };

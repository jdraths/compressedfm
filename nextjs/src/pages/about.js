import Head from 'next/head';
import client from 'src/utils/client';
import groq from 'groq';
import { InteriorLayout } from 'src/modules/shared/layouts/InteriorLayout';
import { AboutPage } from 'src/modules/about';
import { Meta } from 'src/modules/shared/components/Meta';
import MyHead from 'src/modules/shared/components/Header/MyHead';
import { LegalQuery, FaqQuery, GettingStartedEpisodesQuery, PopularEpisodesQuery } from '../queries/Queries';

export default function About({ siteSettings, gettingStarted, mostPopular, faqs, footerLinks }) {
  return (
    <>
      <MyHead title="Altus Talks - About" />
      <InteriorLayout footerLinks={footerLinks}>
        <>
          <Head>
            {/* TODO: update url below */}
            <Meta
              seoTitle="About Altus Talks"
              seoDescription=""
              ogTitle="About Altus Talks"
              ogDescription=""
              ogImage=""
              twitterTitle=""
              twitterDescription=""
              twitterImage=""
              twitterImageAlt=""
              url="https://compressed.fm/about"
            />
          </Head>
          <AboutPage
            siteSettings={siteSettings}
            faqs={faqs}
            gettingStarted={gettingStarted}
            mostPopular={mostPopular}
          />
        </>
      </InteriorLayout>
    </>
  );
}

// get siteSettings
const siteSettingsQuery = groq`*[_type == "siteSettings"]{
  _id,
  reasonsBehind
}[0]`;

export async function getStaticProps() {
  // set settings
  const siteSettings = await client.fetch(siteSettingsQuery);

  // footer links
  const footerLinks = await client.fetch(LegalQuery);

  // get FAQs
  const faqs = await client.fetch(FaqQuery);

  // get Getting Started Episodes
  const gettingStarted = await client.fetch(GettingStartedEpisodesQuery);

  // get Popular Episodes
  const mostPopular = await client.fetch(PopularEpisodesQuery);

  return {
    props: {
      faqs,
      footerLinks,
      gettingStarted,
      mostPopular,
      siteSettings,
    },
  };
}

import client from 'src/utils/client';
import groq from 'groq';
import { InteriorLayout } from 'src/modules/shared/layouts/InteriorLayout';
import { SponsorApplicationPage } from 'src/modules/sponsorApplication';
import { LegalQuery, pricingQuery } from 'queries/Queries';
import MyHead from 'src/modules/shared/components/Header/MyHead';

export default function SponsorApplication({ footerLinks, futureEpisodes, pricing }) {
  // TODO: make sure this doesn't show
  return (
    <InteriorLayout footerLinks={footerLinks}>
      <MyHead title="Altus Talks - Interested in Sponsoring?" />

      <p style={{ fontSize: '24px', 'text-align': 'center' }}>Interested in Sponsoring?</p>
      <p style={{ 'text-align': 'center' }}>Coming Soon</p>
      {/* <SponsorApplicationPage futureEpisodes={futureEpisodes} pricing={pricing} /> */}
    </InteriorLayout>
  );
}

/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */
// get episodes scheduled for the future
// will need to check to see if these have < 3 sponsors
const futureEpisodesQuery = groq`*[_type == "episode" && published == true && publishedAt > now()] | order(episodeNumber desc) {
  _id,
  title,
  publishedAt,
  sponsor[]->{
    _id,
    title,
  },
}`;

export async function getStaticProps() {
  const footerLinks = await client.fetch(LegalQuery);
  const futureEpisodes = await client.fetch(futureEpisodesQuery);
  const pricing = await client.fetch(pricingQuery);
  return {
    props: {
      footerLinks,
      futureEpisodes,
      pricing,
    },
  };
}

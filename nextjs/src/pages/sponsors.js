import client from 'src/utils/client';
import groq from 'groq';
import { InteriorLayout } from 'src/modules/shared/layouts/InteriorLayout';
import { SponsorsPage } from 'src/modules/sponsors';
import { LegalQuery } from 'src/queries/Queries';
import MyHead from 'src/modules/shared/components/Header/MyHead';

export default function Sponsors({ footerLinks, sponsors }) {
  // TODO: kill this page for now
  return (
    <>
      <MyHead title="Altus Talks - Sponsors" />
      <InteriorLayout footerLinks={footerLinks}>
        <SponsorsPage sponsors={sponsors} />
      </InteriorLayout>
    </>
  );
}

const query = groq`*[_type == "sponsor" && published == true && publishedAt < now()] {
  _id,
  title,
  "logo": logo.asset->url,
  offer,
  offerLink,
  aboutText,
  founding,
}`;

export async function getServerSideProps() {
  const sponsors = await client.fetch(query);
  const footerLinks = await client.fetch(LegalQuery);
  return {
    props: { footerLinks, sponsors },
  };
}

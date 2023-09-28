import client from 'src/utils/client';
import { InteriorLayout } from 'src/modules/shared/layouts/InteriorLayout';
import { SponsoringPage } from 'src/modules/sponsoring';
import { LegalQuery, settingsQuery } from 'src/queries/Queries';
import MyHead from 'src/modules/shared/components/Header/MyHead';

export default function Sponsoring({ footerLinks, settings }) {
  return (
    <>
      <MyHead title="Compressed.fm - Sponsoring" />
      <InteriorLayout footerLinks={footerLinks}>
        <SponsoringPage settings={settings} />
      </InteriorLayout>
    </>
  );
}

export async function getServerSideProps() {
  const footerLinks = await client.fetch(LegalQuery);
  const settings = await client.fetch(settingsQuery);
  return {
    props: { footerLinks, settings },
  };
}

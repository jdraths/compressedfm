import { InteriorLayout } from 'src/modules/shared/layouts/InteriorLayout';
import client from 'src/utils/client';
import { LegalQuery } from 'src/queries/Queries';
import { GrabBagPage } from 'src/modules/grabBag';
import MyHead from 'src/modules/shared/components/Header/MyHead';

export default function Contact({ footerLinks }) {
  return (
    <>
      <MyHead title="Altus Talks - Grab Bag Questions" />
      <InteriorLayout footerLinks={footerLinks}>
        <GrabBagPage />
      </InteriorLayout>
    </>
  );
}

export async function getServerSideProps() {
  const footerLinks = await client.fetch(LegalQuery);
  return {
    props: { footerLinks },
  };
}

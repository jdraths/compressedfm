import client from 'src/utils/client';
import groq from 'groq';
import { InteriorLayout } from 'src/modules/shared/layouts/InteriorLayout';
import { GuestApplicationPage } from 'src/modules/guestApplication';
import { LegalQuery } from 'src/queries/Queries';
import MyHead from 'src/modules/shared/components/Header/MyHead';

export default function SponsorApplication({ footerLinks }) {
  return (
    <>
      <MyHead title="Altus Talks - Be A Guest" />
      <InteriorLayout footerLinks={footerLinks}>
        <GuestApplicationPage />
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

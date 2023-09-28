import { InteriorLayout } from 'src/modules/shared/layouts/InteriorLayout';
import { ContactPage } from 'src/modules/contact';
import client from 'src/utils/client';
import { LegalQuery } from 'queries/Queries';
import MyHead from 'src/modules/shared/components/Header/MyHead';

export default function Contact({ footerLinks }) {
  return (
    <>
      <MyHead title="Altus Talks - Contact Us" />
      <InteriorLayout footerLinks={footerLinks}>
        <ContactPage />
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

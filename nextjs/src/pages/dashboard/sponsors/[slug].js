import client from 'src/utils/client';
import { InteriorLayout } from 'src/modules/shared/layouts/InteriorLayout';
import { SponsorDashboardPage } from 'src/modules/sponsorDashboard';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

import { LegalQuery, SponsorBySlugQuery } from 'src/queries/Queries';
import CustomError from '../../customError';

export default function Sponsor({ sponsor, error = null, footerLinks }) {
  if (error) {
    return <CustomError status={500} text={error} />;
  }
  if (!sponsor) {
    return <CustomError status={403} text="You don't have access to this page" />;
  }
  return (
    <InteriorLayout footerLinks={footerLinks}>
      <SponsorDashboardPage sponsor={sponsor} />
    </InteriorLayout>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const { req, res } = context;
    const { slug = '' } = context.query;
    const { user } = getSession(req, res);
    const { email } = user;

    const footerLinks = await client.fetch(LegalQuery);

    try {
      const sponsorBySlug = await client.fetch(SponsorBySlugQuery, { slug });
      // checking email addresses for access
      if (!sponsorBySlug.associatedEmails?.includes(email) && !process.env.ADMIN_EMAILS.includes(email)) {
        return { props: { sponsor: null } };
      }

      return { props: { footerLinks, sponsor: sponsorBySlug, user } };
    } catch (err) {
      console.error(err);
      return {
        props: { error: 'Failed to retrieve episode statistics', footerLinks },
      };
    }
  },
});

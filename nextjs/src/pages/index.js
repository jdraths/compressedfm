import client from 'src/utils/client';
import { HomeLayout } from 'src/modules/shared/layouts/HomeLayout';
import { LegalQuery, RecentEpisodesQuery } from 'src/queries/Queries';
import MyHead from 'src/modules/shared/components/Header/MyHead';
import { HomePage } from 'src/modules/home';

export default function Home({ episodes, footerLinks }) {
  return (
    <>
      <MyHead />
      <HomeLayout footerLinks={footerLinks}>
        <HomePage episodes={episodes} />
      </HomeLayout>
    </>
  );
}

export async function getServerSideProps() {
  const episodes = await client.fetch(RecentEpisodesQuery);

  const footerLinks = await client.fetch(LegalQuery);
  return {
    props: { episodes, footerLinks },
  };
}

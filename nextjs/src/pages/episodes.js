import client from 'src/utils/client';
import { EpisodePage } from 'src/modules/episodes';
import { InteriorLayout } from 'src/modules/shared/layouts/InteriorLayout';
import { LegalQuery, AllEpisodesQuery } from 'src/queries/Queries';
import MyHead from 'src/modules/shared/components/Header/MyHead';

export default function Episodes({ episodes, footerLinks }) {
  console.log('in episodes', episodes, footerLinks);
  return (
    <>
      <MyHead title="Altus Talks - Episodes" />
      <InteriorLayout footerLinks={footerLinks}>
        <EpisodePage episodes={episodes} />
      </InteriorLayout>
    </>
  );
}

export async function getStaticProps() {
  console.log('get static props');
  const footerLinks = await client.fetch(LegalQuery);
  console.log('footerlinks', footerLinks);
  const episodes = await client.fetch(AllEpisodesQuery);
  return {
    props: {
      episodes,
      footerLinks,
    },
  };
}

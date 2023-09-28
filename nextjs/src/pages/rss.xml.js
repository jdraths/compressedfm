import client from 'src/utils/client';
import { AllEpisodesQuery } from 'queries/Queries';

// TODO: update this website
const website = 'https://altustalks.vercel.app';

const xml = (episodes) =>
  `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>Altus Talks</title>
    <link>${website}</link>
    <description>Altus Talks Podcast</description>
    ${episodes
      .map(
        (episode) =>
          `
        <item>
          <title>${episode.title}</title>
          <description>${episode.briefDescription}</description>
          <link>${`${website}/episode/${episode.slug.current}`}/</link>
          <pubDate>${new Date(episode.publishedAt)}</pubDate>
        </item>
      `
      )
      .join('')
      .replace(/&(?!#?[a-z0-9]+;)/g, '&amp;')}
  </channel>
</rss>`;

export default function RSS() {
  return <div>RSS</div>;
}

export async function getServerSideProps({ res }) {
  const episodes = await client.fetch(AllEpisodesQuery);
  const rssString = xml(episodes);
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=3600');
  res.setHeader('Content-Type', 'text/xml');
  res.write(rssString);
  res.end();
  return {
    props: {},
  };
}

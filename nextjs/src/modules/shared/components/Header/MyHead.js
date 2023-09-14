/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';

function MyHead({ title, description, image }) {
  const defaultTitle = 'Altus Talks';
  const defaultDescription = 'A monthly podcast by the interesting students at Altus Academy';
  // TODO: change image
  const defaultImage = '/images/podcast-cover.jpg';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  console.log('my head', image, title, description);
  return (
    <Head>
      <title>Altus Talks</title>
      <meta name="title" content={title || defaultTitle} key="title" />
      <meta name="description" content={description || defaultDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || baseUrl + defaultImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={baseUrl} />
      <meta property="twitter:title" content={title || defaultTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image || baseUrl + defaultImage} />
    </Head>
  );
}

export default MyHead;

import PropTypes from 'prop-types';
import Head from 'next/head';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

import { Breakpoints } from 'src/styles/Breakpoints';
import { formatShortDate } from 'src/utils/dateHelpers';
import { Meta } from 'src/modules/shared/components/Meta';
import { MixinBodyCopy, MixinPageTitle, MixinSectionHeading } from 'src/styles/Typography';
import { Newsletter } from 'src/modules/shared/components/Newsletter';
import { serializers } from 'src/modules/shared/blockContent/Serializers';
import { VerticalDivider } from 'src/modules/shared/components/VerticalDivider';
import { NewsletterPagination } from './components/NewsletterPagination';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const IndividualNewsletterPage = ({ dateSent, subject, content, meta, pagination }) => (
  <StyledIndividualNewsletterPage>
    <Head>
      <title>{subject} || Altus Talks</title>
      {meta && <Meta meta={meta} />}
    </Head>

    <h3 className="sent-date">Sent {formatShortDate(dateSent)}</h3>
    <h1 className="page-title">{subject}</h1>
    <main>
      <BlockContent blocks={content} serializers={serializers} />
    </main>

    {/* pagination */}
    <NewsletterPagination pagination={pagination} />

    <VerticalDivider />

    <Newsletter />
  </StyledIndividualNewsletterPage>
);

IndividualNewsletterPage.propTypes = {
  dateSent: PropTypes.string,
  subject: PropTypes.string,
  content: PropTypes.array,
  meta: PropTypes.object,
  pagination: PropTypes.object,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledIndividualNewsletterPage = styled.div`
  h1.page-title {
    ${MixinPageTitle}
  }

  h3.sent-date {
    ${MixinSectionHeading}

    border: none;
    padding: 0;
    text-align: center;
    width: 100%;
  }

  main {
    padding: 0 ${(props) => props.theme.mobilePadding};
    margin: 0 auto;
    max-width: 600px;

    @media (${Breakpoints.regular}) {
      padding: 0;
    }

    h2 {
      font-size: 2rem;

      @media (${Breakpoints.portrait}) {
        color: ${(props) => props.theme.yellow};
        font-size: 2.4rem;
      }
    }

    img {
      max-width: 100%;
    }

    p {
      ${MixinBodyCopy}
      margin-bottom: ${(props) => props.theme.betweenTextBlocks};
    }
  }
`;

export { IndividualNewsletterPage };

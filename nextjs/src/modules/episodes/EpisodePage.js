import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import { EpisodeGrid } from 'src/modules/shared/components/EpisodeGrid';
import { Newsletter } from 'src/modules/shared/components/Newsletter';
import { Podcatchers } from 'src/modules/shared/components/Podcatchers';
import { FeaturedEpisode } from 'src/modules/home/components/FeaturedEpisode';
import { VerticalDivider } from 'src/modules/shared/components/VerticalDivider';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const EpisodePage = ({ episodes }) => {
  // get the first element in the array to feature
  const featuredEpisode = episodes[0];
  const remainingEpisodes = episodes.slice(1);

  console.log('in episode page', featuredEpisode, remainingEpisodes);
  return (
    <StyledEpisodePage>
      {featuredEpisode && (
        <>
          <FeaturedEpisode episode={featuredEpisode} />
          <VerticalDivider />
        </>
      )}
      <EpisodeGrid episodes={remainingEpisodes} />
      <VerticalDivider />
      <Podcatchers className="podcatchers" />
      {/* <VerticalDivider />
      <Newsletter /> */}
    </StyledEpisodePage>
  );
};

EpisodePage.propTypes = {
  episodes: PropTypes.array.isRequired,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledEpisodePage = styled.section`
  .podcatchers {
    margin: 50px 0;
  }
`;

export { EpisodePage };

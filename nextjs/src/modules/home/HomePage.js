import styled from 'styled-components';

// components
import { Newsletter } from '../shared/components/Newsletter';
import { Podcatchers } from '../shared/components/Podcatchers';
import { VerticalDivider } from '../shared/components/VerticalDivider';
import { EpisodeGrid } from '../shared/components/EpisodeGrid';

// styles
import { TheHosts } from './components/TheHosts';
import { FeaturedEpisode } from './components/FeaturedEpisode';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const HomePage = ({ episodes }) => {
  // get the first element in the array to feature
  const featured = episodes[0];
  const remainingEpisodes = episodes.slice(1);

  return (
    <StyledHomePage>
      <Podcatchers className="podcatchers" />
      <VerticalDivider />

      {featured && (
        <>
          <FeaturedEpisode episode={featured} />
          <VerticalDivider />
        </>
      )}

      {/* TODO: this may be unnecessary */}
      <TheHosts />
      <VerticalDivider />

      {episodes && remainingEpisodes.length > 0 && (
        <>
          <EpisodeGrid header="Recent Episodes" episodes={remainingEpisodes} />
          <VerticalDivider />
        </>
      )}

      <Newsletter />
    </StyledHomePage>
  );
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledHomePage = styled.div`
  .podcatchers {
    padding-bottom: 50px;
  }
`;

export { HomePage };

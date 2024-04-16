import { WaveformPlayer } from 'src/modules/shared/components/AudioPlayer/WaveformPlayer';
import { Podcatchers } from 'src/modules/shared/components/Podcatchers';
import { VerticalDivider } from 'src/modules/shared/components/VerticalDivider';

export default function Home() {
  return (
    <div>
      <WaveformPlayer
        artwork="https://cdn.sanity.io/images/8e5auuyh/production/7440e7d44ee70dc821863b5e87d16f35c7a63a87-500x500.png"
        episodeTitle="Sample Ad - Yaridh and Emely"
        audioPath="/files/GalaAd.mp3"
        episodeNumber="Yaridh and Emely"
        skipTo={0}
      />
      <br />

      <VerticalDivider />
      <br />

      <Podcatchers className="podcatchers" />
    </div>
  );
}

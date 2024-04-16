import { WaveformPlayer } from 'src/modules/shared/components/AudioPlayer/WaveformPlayer';

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
      <WaveformPlayer
        artwork="https://cdn.sanity.io/images/8e5auuyh/production/7440e7d44ee70dc821863b5e87d16f35c7a63a87-500x500.png"
        episodeTitle="Sample Ad - Zeus"
        audioPath="/files/Zeus.mp3"
        episodeNumber="Zeus"
        skipTo={0}
      />
    </div>
  );
}

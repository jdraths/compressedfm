import SimplePlayer from 'src/modules/shared/components/AudioPlayer/SimplePlayer';

export default function Home() {
  return (
    <div>
      <h1>Listen to our audio</h1>
      <SimplePlayer src="/files/GalaAd.mp3" />
    </div>
  );
}

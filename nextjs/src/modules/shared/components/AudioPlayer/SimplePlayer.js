import { useEffect, useRef } from 'react';

function SimplePlayer({ src }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => console.log('Error playing audio:', error));
    }
  }, []);

  return (
    <audio ref={audioRef} src={src} controls>
      Your browser does not support the audio element.
    </audio>
  );
}

export default SimplePlayer;

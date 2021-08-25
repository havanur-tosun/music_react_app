import {useState, useEffect} from 'react';
import Player from './components/Player'

function App() {
  const [songs] = useState([
    {
      title: "Nightmare",
      artist: "Vairo",
      img_src: "./images/song-1.jpg",
      src: "./music/Vairo - Nightmare (Official Music Video).mp3"
    },
    {
      title: "Scarab",
      artist: "Vairo",
      img_src: "./images/song-2.jpg",
      src: "./music/Vairo - Scarab (Flawx Remix).mp3"
    },
    {
      title: "Winter",
      artist: "Vairo",
      img_src: "./images/song-3.jpg",
      src: "./music/Vairo - Winter (The Four Seasons).mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
         currentSongIndex = {currentSongIndex}
         setCurrentSongIndex = {setCurrentSongIndex}
         nextSongIndex = {nextSongIndex}
         songs = {songs}
      />
    </div>
  );
}

export default App;

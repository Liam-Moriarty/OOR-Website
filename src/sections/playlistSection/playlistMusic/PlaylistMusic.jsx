import React, { useState, useRef } from "react";
import "./playlistMusic.css";
import { playlistIcons } from "../../../constants/constants";
import { IoPlayOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { FiShare2 } from "react-icons/fi";
import { musicList } from "../../../constants/data.js";

const PlaylistMusic = () => {
  const [isPlaying, setIsPlaying] = useState(null);
  const audioRefs = useRef({});

  const sliceMusic = musicList.slice(0, 10);

  const handlePlayButton = (id) => {
    if (isPlaying === id) {
      audioRefs.current[id].pause();
      setIsPlaying(null);
    } else {
      if (isPlaying !== null) {
        audioRefs.current[isPlaying].pause();
      }
      audioRefs.current[id].play();
      setIsPlaying(id);
    }
  };

  return (
    <div className="sectionContainer playlistMusicExtended">
      <h1 className="playlistMusic-title">STREAM IT YOUR WAY</h1>

      <ul className="playlistMusic-icon-wrapper">
        {playlistIcons.map((icons, index) => (
          <li key={index}>
            <a href={icons.path}>{icons.icons}</a>
          </li>
        ))}
      </ul>

      <h2 className="playlistMusic-title">TRACK LIST</h2>

      {/* PLAYLIST */}

      <div className="musicList-wrapper">
        {sliceMusic.map((list) => (
          <div key={list.id} className="musicList-items">
            <div className="items-id">{list.id}</div>

            <div className="items-songs">
              <div
                className="song-icon"
                onClick={() => handlePlayButton(list.id)}
              >
                {isPlaying === list.id ? <CiPause1 /> : <IoPlayOutline />}
                <audio
                  ref={(el) => (audioRefs.current[list.id] = el)}
                  src={list.songPath}
                ></audio>
              </div>

              <div className="songMusic-title">
                <h1>{list.song}</h1>
                <p>{list.album}</p>
              </div>
            </div>

            <div className="items-timer">{list.time}</div>

            <div className="items-share">
              <FiShare2 />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistMusic;

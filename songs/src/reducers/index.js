import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Wish You Were Here", duration: "4:05" },
    { title: "Shine On You Crazy Diamond", duration: "4:06" },
    { title: "Money", duration: "4:07" },
    { title: "The Wall", duration: "4:08" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

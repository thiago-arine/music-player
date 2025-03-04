// Fetch ou Axios
import axios from "axios";

// const NODE_ENV = process.env.NODE_ENV;
// const URL = "http://localhost:3000/api";
const URL = import.meta.env.VITE_API_URL || "https://music-player-3nt1.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
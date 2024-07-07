import {
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaTwitch,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa6";

import imgSlider1 from "../images/oor5.jpg";
import imgSlider2 from "../images/oor4.jpg";
import imgSlider3 from "../images/oor3.jpg";

export const socialLinks = [
  { path: "#", icons: <FaInstagram /> },
  { path: "#", icons: <FaTiktok /> },
  { path: "#", icons: <FaXTwitter /> },
  { path: "#", icons: <FaTwitch /> },
  { path: "#", icons: <FaFacebook /> },
  { path: "#", icons: <FaDiscord /> },
];

export const pageLinks = [
  { path: "/", name: "Home" },
  { path: "/albums", name: "Albums" },
  { path: "/artists", name: "Artists" },
  { path: "/playlists", name: "Playlists" },
];

export const imageSlider = [
  {
    id: 1,
    path: imgSlider1,
    song: "We Are",
    album: "Ambitions",
    released: "Released January 9, 2017",
  },
  {
    id: 2,
    path: imgSlider2,
    song: "Renegades",
    album: "Luxury Disease",
    released: "Released April 15, 2021",
  },
  {
    id: 3,
    path: imgSlider3,
    song: "Kanzen Kaku Dreamer",
    album: "Niche Syndrome",
    released: "Released February 3, 2009",
  },
];

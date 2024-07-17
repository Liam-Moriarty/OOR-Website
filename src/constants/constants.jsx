import {
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaTwitch,
  FaFacebook,
  FaDiscord,
  FaYoutube,
  FaSpotify,
  FaApple,
} from "react-icons/fa6";

import imgSlider1 from "../images/oor3.jpg";
import imgSlider2 from "../images/oor4.jpg";
import imgSlider3 from "../images/oor5.jpg";

import albumCards1 from "../images/playlist10.jpg";
import albumCards2 from "../images/playlist9.jpg";
import albumCards3 from "../images/playlist7.jpg";

import latestReleased1 from "../images/oneokrock.jpg";
import latestReleased2 from "../images/playlist2.jpg";
import latestReleased3 from "../images/playlist.jpg";

import artists1 from "../images/ryota.jpg";
import artists2 from "../images/taka.jpg";
import artists3 from "../images/tomoya2.jpg";
import artists4 from "../images/toru.jpg";

import news1 from "../images/playlist4.jpg";
import news2 from "../images/playlist5.jpg";
import news3 from "../images/playlist6.jpg";

import playlist1 from "../images/luxury diesease.jpg";
import playlist2 from "../images/ambition.jpg";
import playlist3 from "../images/playlist11.jpg";
import playlist4 from "../images/35vi.jpg";

import accountsGold from "../images/accountsGold.webp";
import accountsPremium from "../images/accountsPremium.webp";

import event1 from "../images/event1.webp";
import event2 from "../images/event2.webp";
import event3 from "../images/event3.webp";
import event4 from "../images/event4.webp";
import event5 from "../images/event5.webp";
import event6 from "../images/event6.webp";

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
    song: "Kanzen Kaku Dreamer",
    album: "Niche Syndrome",
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
    song: "We Are",
    album: "Ambitions",
    released: "Released February 3, 2009",
  },
];

export const albumCards = [
  { id: 1, path: albumCards1, alt: "album1" },
  { id: 2, path: albumCards2, alt: "album2" },
  { id: 3, path: albumCards3, alt: "album3" },
];

export const featuredSlider = {
  released: [
    { id: 1, path: latestReleased1, alt: "released1" },
    { id: 2, path: latestReleased2, alt: "released2" },
    { id: 3, path: latestReleased3, alt: "released3" },
  ],

  artists: [
    { id: 1, path: artists1, alt: "artists1", artist: "Ryota" },
    { id: 2, path: artists2, alt: "artists2", artist: "Taka" },
    { id: 3, path: artists3, alt: "artists3", artist: "Tomoya" },
    { id: 4, path: artists4, alt: "artists4", artist: "Toru" },
  ],

  news: [
    { id: 1, path: news1, alt: "news1" },
    { id: 2, path: news2, alt: "news2" },
    { id: 3, path: news3, alt: "news3" },
  ],
};

export const playlists = [
  { id: 1, path: playlist1, alt: "playlist1" },
  { id: 2, path: playlist2, alt: "playlist2" },
  { id: 3, path: playlist3, alt: "playlist3" },
  { id: 4, path: playlist4, alt: "playlist4" },
];

export const accounts = {
  gold: [
    {
      id: 1,
      title: "UNLOCK GOLD FEATURES",
      img: accountsGold,
      description:
        "One OK Rock Gold is an individual music licensing subscription that gives members access to thousands of high-quality songs to use in their creative content.",
    },
  ],
  premium: [
    {
      id: 1,
      title: "SYNC & PARTNERSHIPS",
      img: accountsPremium,
      description:
        "Discover the unique partnerships and diverse audiences that have embraced the One Ok Rock band.",
    },
  ],
};

export const events = [
  {
    id: 1,
    bgImg: event1,
    title: "EVENTS",
    description:
      "Find out where you can experience One Ok Rock artists performing live around the world",
  },
  {
    id: 2,
    bgImg: event2,
    title: "One Ok Rock TV",
    description:
      "Tune in to our weekly Twitch broadcast for livestreamed sets, artist residencies, original content and more",
  },
  {
    id: 3,
    bgImg: event3,
    title: "SHOP",
    description:
      "Cop the latest looks from our apparel collections and dig through our vinyl offerings",
  },
  {
    id: 4,
    bgImg: event4,
    title: "CALL OF THE WILD",
    description:
      "Dive into an unbound exploration of sound with One Ok Rock weekly radio show & podcast",
  },
  {
    id: 5,
    bgImg: event5,
    title: "SILK SHOWCASE",
    description:
      "Enjoy One Ok Rock Silk’s weekly radio show & podcast, featuring the best in progressive house, trance, and more",
  },
  {
    id: 6,
    bgImg: event6,
    title: "PRESS",
    description:
      "Catch up on breaking news, interviews, and One Ok Rock announcements in the media",
  },
];

export const footerLinks = {
  links: [
    { links: "ABOUT One Ok Rock" },
    { links: "CONTACT US" },
    { links: "CAREERS" },
    { links: "NEWS" },
    { links: "PRESS" },
  ],

  terms: [{ links: "TERMS OF SERVICE" }, { links: "PRIVACY POLICY" }],

  socialLinks: [
    { icons: <FaInstagram /> },
    { icons: <FaTiktok /> },
    { icons: <FaXTwitter /> },
    { icons: <FaTwitch /> },
    { icons: <FaDiscord /> },
    { icons: <FaYoutube /> },
    { icons: <FaSpotify /> },
    { icons: <FaApple /> },
  ],
};

export const albumSlider = [
  {
    id: 1,
    path: imgSlider1,
    song: "Kanzen Kaku Dreamer",
    album: "Niche Syndrome",
    released: "Released February 3, 2009",
    artistsImg: artists1,
  },
  {
    id: 2,
    path: imgSlider2,
    song: "Renegades",
    album: "Luxury Disease",
    released: "Released April 15, 2021",
    artistsImg: artists2,
  },
  {
    id: 3,
    path: imgSlider3,
    song: "We Are",
    album: "Ambitions",
    released: "Released January 9, 2017",
    artistsImg: artists3,
  },
];

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Albums from "./pages/albums/Albums";
import Artists from "./pages/artists/Artists";
import Playlist from "./pages/playlist/Playlist";

function App() {
  return (
    <main className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;

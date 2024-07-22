import React, { useState, useRef, useEffect } from "react";
import "./music.css";
import { musicList } from "../../../constants/data";
import ReactPaginate from "react-paginate";
import { TbPlayerTrackPrev, TbPlayerTrackNext } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";

const Music = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);

  const musicPerPage = 12;
  const pageVisited = pageNumber * musicPerPage;

  // Filter the entire music list based on the search term
  const filteredMusic = musicList.filter((item) => {
    return search.toLocaleLowerCase() === ""
      ? item
      : item.song.toLowerCase().includes(search) ||
          item.album.toLowerCase().includes(search);
  });

  // Apply pagination to the filtered music list
  const displayMusic = filteredMusic
    .slice(pageVisited, pageVisited + musicPerPage)
    .map((music) => {
      return (
        <div key={music.id} className="music-grid-items">
          <div className="grid-image-wrapper">
            <img src={music.img} alt="" />
          </div>
          <p className="grid-song">{music.song}</p>
          <p className="grid-album">{music.album}</p>
        </div>
      );
    });

  const pageCount = Math.ceil(filteredMusic.length / musicPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleIconClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="sectionContainer musicExtended">
      {/* MUSIC TITLE */}

      <div className="music-flex">
        <div className="music-title-container">
          <h1>Discography</h1>
          <p>explore in the oor songs</p>
        </div>

        <div className="music-search-container">
          <div className="search" ref={searchRef}>
            <FaSearch className="search-icon" onClick={handleIconClick} />
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
                setPageNumber(0); // Reset to the first page on search
              }}
              className={isExpanded ? "expanded" : ""}
            />
          </div>
          {/* <div className="filter">filter</div>
          <div className="desc/asc">desc/asc</div> */}
        </div>
      </div>

      {/* GRID CONTENT */}
      <div className="music-grid">
        {/* ITEMS */}
        {displayMusic}
        <div className="pagination-wrapper">
          <ReactPaginate
            previousLabel={<TbPlayerTrackPrev />}
            nextLabel={<TbPlayerTrackNext />}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            pageClassName={"paginationLi"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </div>
  );
};

export default Music;

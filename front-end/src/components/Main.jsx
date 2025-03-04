import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import SearchBar from "./SearchBar";
const Main = ({ type }) => {
  return (
    <div className="main">
      <SearchBar />

      {/* Item List Artistas */}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={6}
          itemsArray={artistArray}
          path="artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}
      {/* Item List Músicas */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={14}
          itemsArray={songsArray}
          path="songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default Main;

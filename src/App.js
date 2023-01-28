import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
const books = {
  javascript: [
    { name: "Eloquent JS", rating: "4.5/5" },
    { name: "You don't know JS", rating: "3.5/5" },
  ],
  fiction: [
    { name: "Shiva Triology", rating: "5/5" },
    { name: "Harry Potter and the Sorcer's stone", rating: "4.5/5" },
  ],
  bussiness: [
    { name: "Forbes 30u30", rating: "1.5/5" },
    { name: "Do Epic Shit", rating: "2.4/5" },
  ],
};

function App() {
  const [selectedGenre, setGenre] = useState("bussiness");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Book recommender📚</h1>
      <p>Here are the some books that we recommend</p>
      <hr />
      <div className="main-div">
        {Object.keys(books).map((genre) => (
          <button
            className="primary-button"
            onClick={() => genreClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <div>
        <ul>
          {books[selectedGenre].map((book) => (
            <li style={{ listStyle: "none" }}>
              <div className="div-u">{book.name}</div>
              <div className="div-l">{book.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

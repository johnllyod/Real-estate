import React from "react";
import "./searchnav.css";

function SearchNav({ handleSubmit }) {
  return (
    <section className="App-search" id="SearchNav">
      <form action="GET" onSubmit={handleSubmit}>
        <div className="inline-block">
          <i
            className="fa-solid fa-bed"
            style={{ color: "white", marginRight: "5px" }}
          ></i>
          <input
            type="number"
            id="Bed"
            placeholder="Bed"
            min="1"
            className="searchInputs"
          />
        </div>

        <div className="inline-block">
          <i
            className="fa-solid fa-bath"
            style={{ color: "white", margin: "0px 5px 0px" }}
          ></i>
          <input
            type="number"
            id="Baths"
            placeholder="Baths"
            min="1"
            className="searchInputs"
          />
        </div>

        <div className="inline-block">
          <i
            className="fa-solid fa-expand"
            style={{ color: "white", margin: "0px 5px 0px" }}
          ></i>
          <input
            type="number"
            id="Sqft"
            placeholder="Sqft"
            min="200"
            className="searchInputs"
          />
        </div>

        <span className="h-Margin inline-block">
          <i
            className="fa-solid fa-tag"
            style={{ color: "white", margin: "0px 5px 0px" }}
          ></i>
          <input
            type="number"
            id="Price"
            placeholder="Price"
            min="500000"
            className="searchInputs"
          />
          <select name="priceRange" className="searchInputs">
            <option value="above">Above</option>
            <option value="bellow">Bellow</option>
          </select>
        </span>

        <div className="inline-block">
          <i
            className="fa-solid fa-map-location"
            style={{ color: "white", margin: "0px 5px 0px" }}
          ></i>
          <select
            name="location"
            id="Location"
            className="searchInputs"
            style={{ marginRight: "5px" }}
          >
            <option value="">Anywhere</option>
            <option value="manila">Manila</option>
            <option value="makati">Makati</option>
            <option value="cavite">Cavite</option>
            <option value="san pablo city">San Pablo City</option>
            <option value="calamba">Calamba</option>
            <option value="pampanga">Pampanga</option>
            <option value="san rafael">San Rafael</option>
            <option value="general trias">General Trias</option>
            <option value="santa rosa">Santa Rosa</option>
          </select>
        </div>
        <input type="submit" value="Search" id="SearchBtn" />
      </form>
    </section>
  );
}

export default SearchNav;

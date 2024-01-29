import React, { useEffect, useState } from "react";
import HouseGallery from "./HouseGallery";
import SearchNav from "../searchnav/SearchNav";
import "./housegalleryfilter.css";

function HouseGalleryFilter(props) {
  let houseArr = props.data;
  const [bed, setBed] = useState("");
  const [bath, setBath] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [location, setLocation] = useState("");
  let hasBed = false;
  let hasBath = false;
  let hasSize = false;
  let hasPrice = false;
  let hasLoc = false;

  const handleSubmit = (event) => {
    event.preventDefault();
    setBed(Number(event.target[0].value));
    setBath(Number(event.target[1].value));
    setSize(Number(event.target[2].value));
    setPrice(Number(event.target[3].value));
    setPriceRange(event.target[4].value);
    setLocation(event.target[5].value);
  };

  const filterBed = (item) => {
    if (!bed) {
      return true;
    }
    let exist = Number(item.bed) === Number(bed);
    if (exist) {
      if (!hasBed) {
        hasBed = true;
        ResultAlert(false);
      }
    } else {
      if (!hasBed) {
        if (document.getElementById("ResultMSG")) {
          ResultAlert(true);
        }
      }
    }
    return exist;
  };

  const filterBath = (item) => {
    if (!bath) {
      return true;
    }
    let exist = Number(bath) === Number(item.baths);
    if (exist) {
      if (!hasBath) {
        hasBath = true;
        ResultAlert(false);
      }
    } else {
      if (!hasBath) {
        if (document.getElementById("ResultMSG")) {
          ResultAlert(true);
        }
      }
    }
    return exist;
  };

  const filterSize = (item) => {
    if (!size) {
      return true;
    }
    let exist = Number(size) <= Number(item.sqft);
    if (exist) {
      if (!hasSize) {
        hasSize = true;
        ResultAlert(false);
      }
    } else {
      if (!hasSize) {
        if (document.getElementById("ResultMSG")) {
          ResultAlert(true);
        }
      }
    }
    return exist;
  };

  const filterPrice = (item) => {
    let pricenum = item.price.replace(/\,/g, "");
    if (!price) {
      return true;
    }

    let exist;
    if (priceRange === "above") {
      exist = Number(pricenum) >= price;
    } else {
      exist = Number(pricenum) <= price;
    }

    if (exist) {
      if (!hasPrice) {
        hasPrice = true;
        ResultAlert(false);
      }
    } else {
      if (!hasPrice) {
        if (document.getElementById("ResultMSG")) {
          ResultAlert(true);
        }
      }
    }
    return exist;
  };

  const filterLocation = (item) => {
    if (!location) {
      return true;
    }
    let exist =
      location.toLocaleLowerCase() === item.location.toLocaleLowerCase();
    if (exist) {
      if (!hasLoc) {
        hasLoc = true;
        ResultAlert(false);
      }
    } else {
      if (!hasLoc) {
        if (document.getElementById("ResultMSG")) {
          ResultAlert(true);
        }
      }
    }
    return exist;
  };

  function ResultAlert(r) {
    let resultMsg = document.getElementById("ResultMSG");
    let msg = "";
    if (r) {
      msg = "No result for ";
      msg += bed !== 0 ? bed + " bed(s) " : "";
      msg += bath !== 0 ? bath + " bath(s) " : "";
      msg += size !== 0 ? size + " sqft " : "";
      msg += price !== 0 ? priceRange + " Php " + price + " " : "";
      msg += " house ";
      msg += location === "" ? "anywhere." : "within " + location + ".";
    }
    resultMsg.innerHTML = msg;
  }

  return (
    <>
      <SearchNav handleSubmit={handleSubmit} />
      <b>
        <p id="ResultMSG"></p>
      </b>
      <section className="App-gallery" id="Gallery">
        {houseArr
          .filter(filterBed)
          .filter(filterBath)
          .filter(filterSize)
          .filter(filterPrice)
          .filter(filterLocation)
          .filter((item, i) => i < 6)
          .map((data, index) => (
            <HouseGallery
              i={index}
              name={data.name}
              imgUrl={data.img}
              price={data.price}
              bed={data.bed}
              baths={data.baths}
              sqft={data.sqft}
              location={data.location}
            />
          ))}
      </section>
    </>
  );
}

export default HouseGalleryFilter;

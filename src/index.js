import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const houseData = [
  {
    name: "House 1",
    img: "images/Indoor_House_1.jpg",
    price: "9,300,000",
    bed: "3",
    baths: "2",
    sqft: "538.196",
    location: "Manila",
  },
  {
    name: "House 2",
    img: "images/Indoor_House_2.jpg",
    price: "4,000,100",
    bed: "5",
    baths: "2",
    sqft: "1065.63",
    location: "Manila",
  },
  {
    name: "House 3",
    img: "images/Indoor_House_3.jpg",
    price: "5,700,000",
    bed: "4",
    baths: "3",
    sqft: "1270.14",
    location: "Makati",
  },
  {
    name: "House 4",
    img: "images/Indoor_House_4.jpg",
    price: "1,590,000",
    bed: "1",
    baths: "1",
    sqft: "613.543",
    location: "Cavite",
  },
  {
    name: "House 5",
    img: "images/Indoor_House_5.jpg",
    price: "3,895,000",
    bed: "3",
    baths: "2",
    sqft: "645.835",
    location: "San Pablo City",
  },
  {
    name: "House 6",
    img: "images/Indoor_House_6.jpg",
    price: "4,767,000",
    bed: "3",
    baths: "2",
    sqft: "1184.03",
    location: "Calamba",
  },
  {
    name: "House 7",
    img: "images/Indoor_House_7.jpg",
    price: "2,224,500",
    bed: "2",
    baths: "1",
    sqft: "699.654",
    location: "Pampanga",
  },
  {
    name: "House 8",
    img: "images/Indoor_House_8.jpg",
    price: "1,800,000",
    bed: "2",
    baths: "1",
    sqft: "441.32",
    location: "San Rafael",
  },
  {
    name: "House 9",
    img: "images/Indoor_House_9.jpg",
    price: "6,650,000",
    bed: "3",
    baths: "2",
    sqft: "1291.67",
    location: "General Trias",
  },
  {
    name: "House 10",
    img: "images/Indoor_House_10.jpg",
    price: "6,800,000",
    bed: "4",
    baths: "3",
    sqft: "1474.66",
    location: "Santa Rosa",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App data={houseData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

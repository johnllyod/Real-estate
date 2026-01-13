import "./App.css";
import HouseGalleryFilter from "./components/gallery/HouseGalleryFilter";
import TopNav from "./components/topnav/TopNav";
import Services from "./components/services/Services";
import About from "./components/about/About";
import ContactUs from "./components/contactus/ContactUs";
import Footer from "./components/footer/Footer";

function App(props) {
  return (
    <div className="App">
      <TopNav />

      <section className="App-welcome">
        <img src="images/Cover_house.jpg" alt="Out door house" />
        <h1>
          Find your dream
          <br />
          home here!
          <br />
          <a href="#SearchNav">Find a home</a>
        </h1>
      </section>

      <Services />

      <HouseGalleryFilter data={props.data} />

      <About />

      <ContactUs />

      <Footer />

      <p>Created by John Llyod Apolo</p>
    </div>
  );
}

export default App;

import Nav from './components/nav/Nav';
import Rotator from './components/rotator/Rotator.js'
import About from "./components/about/About.js"
import Location from "./components/location/Location.js"
import Products from "./components/products/Products.js"
import Contact from "./components/contact/Contact.js"
import Stock from "./components/stock/Stock.js"

export default function Home() {
  return (
    

      <main>
          <div>
            <Nav/>
          </div>

          <div>
            <Stock/>
          </div>

          <div className="">
            <Rotator/>
          </div>

          <div style={{
            height: "",
            backgroundColor: ""
          }}>
            <About/>
          </div>

          <div >
            <Location/>
          </div>

          <div>
            <Products/>
          </div>

          <footer>
            <Contact/>
          </footer>
      </main>
  );
}

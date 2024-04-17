import Nav from './components/nav/Nav';
import Rotator from './components/rotator/Rotator.js'
import About from "./components/about/About.js"
import Location from "./components/location/Location.js"
import Products from "./components/products/Products.js"
import Contact from "./components/contact/Contact.js"
import Stock from "./components/stock/Stock.js"
import Mvn from "./components/mobile_view_name/Mvn.js"

export default function Home() {
  return (
    

      <main>
          <div>
            <Nav/>
          </div>

          <div className="">
            <Rotator/>
          </div>

          <div>
            <Mvn/>
          </div>

          <div style={{
            height: "",
            backgroundColor: ""
          }}>
             <Location/>
          </div>

          <div>
            <Products/>
          </div>

          <div >
           <About/>
          </div>

          <footer>
            <Contact/>
          </footer>
      </main>
  );
}

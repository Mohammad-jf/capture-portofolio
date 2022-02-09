import React from "react";
import AboutUs from './pages/AboutUs';
import GlobalStyle from "./Components/GlobalStyle";
import Navigation from '../src/Components/Navigation'
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetails from './Components/MovieDetails';
//router
import { Switch , Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
     <GlobalStyle/>
     <Navigation/>

    <Switch>
         <Route path="/" exact>
              <AboutUs/>
        </Route>

         <Route path="/work">
              <OurWork/>
        </Route>

         <Route path="/contact">
              <ContactUs/>
        </Route>

    </Switch>
     
    </div>
  );
}

export default App;

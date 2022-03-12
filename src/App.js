import React from "react";
import AboutUs from './pages/AboutUs';
import GlobalStyle from "./Components/GlobalStyle";
import Navigation from '../src/Components/Navigation'
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetails from "./pages/MovieDetails";
//router
import { Switch , Route,useLocation } from 'react-router-dom';
//aimation
import {AnimatePresence} from 'framer-motion';



function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle/>
      
     <Navigation/>

    <AnimatePresence exitBeforeEnter>

        <Switch location={location} key={location.pathname}>
          
            <Route path="/" exact>
                  <AboutUs/>
            </Route>

            <Route path="/work" exact>
                  <OurWork/>
            </Route>

            <Route path="/work/:id">
              <MovieDetails/>
          
            </Route>

            <Route path="/contact">
                  <ContactUs/>
            </Route>

        </Switch>

    </AnimatePresence>
     
    </div>
  );
}

export default App;

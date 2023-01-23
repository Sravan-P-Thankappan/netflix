import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Poster from './Components/Poster/Poster';
import {originals,action,romance,horror} from './url'
import Footer from './Components/Footer/Footer';

function App() {
  return ( 
    <div>
      
       <Navbar/>
       <Banner/>
       <Poster url={originals} title='Netflix Original'/>
       <Poster url={action}  title='Action' isSmall/>
       <Poster url={romance}  title='Romance' isSmall/>
       <Poster url={horror}  title='Horror' isSmall/>
       <Footer/>




    </div>
  );
}

export default App;

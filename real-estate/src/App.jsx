import React from 'react';
import "./index.css";
import Header from './components/Header';
import About from './components/About';
import Properties from './components/Properties';
import Details from './components/Details';
import Contact from './components/Contact';



const App = () => {
  return (
    <div className=' overflow-hidden w-full'>
    <Header/>
    <About/>
    <Properties/>
    <Details/>
    <Contact/>
    </div>
  )
}

export default App

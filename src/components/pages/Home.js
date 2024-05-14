import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Features from '../Features/Features';
import Rating from '../Reviews/Rating'
import Body from '../Body/Body'
import Footer from '../Footer/Footer';
function Home() {
  return (
    <div className="App">
     <Dashboard/>
      <Features />
     <Body/>
      <Footer/>
      <Rating />
    </div>
  );
}

export default Home;


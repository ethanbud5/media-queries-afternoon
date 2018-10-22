import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <HeroSection/>
      </div>
    );
  }
}

export default App;

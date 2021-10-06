import React from 'react';
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Tinder Cards */}
      <TinderCards />
      {/* Swipe Buttons */}
    </div>
  );
}

export default App;

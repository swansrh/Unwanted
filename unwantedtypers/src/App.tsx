import React from 'react';
import NavigationBaby from './shared/NavigationBaby';
import TitleCard from './Home/TitleCard';
import NewProducts from './Home/NewProducts';
import "tailwindcss/tailwind.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBaby />
      <TitleCard />
      <NewProducts />
    </div>
  );
}

export default App;

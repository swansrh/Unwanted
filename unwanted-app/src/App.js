import './App.css';
import NavigationBaby from './Shared/NavigationBaby';
import TitleCard from './HomePageParts/TitleCard';
import NewProducts from './HomePageParts/NewProducts';

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

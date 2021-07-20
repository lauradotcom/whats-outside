import SearchBar from '../SearchBar/SearchBar';
import CurrentConditions from '../CurrentConditions/CurrentConditions';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>What's Outside?</h1>
      <h2>Weather, Pollen and Air Quality Forecast</h2>
      <SearchBar />
      <CurrentConditions />
    </div>
  );
}

export default App;

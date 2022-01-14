import CurrencyConverter from "./components/CurrencyConverter";
import NewsFeed from "./components/NewsFeed";
import Trends from "./components/Trends";

const App = () => {
  return (
    <div className="app">
    <h1>
      Crypto DashBoard
    </h1>
    <Trends/>
    <div className="app-wrapper">
    <CurrencyConverter/>
      <NewsFeed />
    </div>
    </div>
  );
}

export default App;

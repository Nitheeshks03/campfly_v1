import "./App.css";
import TrendingCard from './components/TrendingCard';

function App() {
  return (
    <>
      <div>
        <h1 class="text-5xl font-bold mb-4">Welcome to CampFly.in </h1>
        <label for="datepicker">Select a Date:</label>
        <input type="month" id="bdaymonth" name="bdaymonth" />
      </div>
      {/* card */}
      <div className="flex justify-around">
      <TrendingCard/>
      <TrendingCard/>
      <TrendingCard/>
      <TrendingCard/>
      <TrendingCard/>
      </div>
      


    
    </>
  );
}

export default App;

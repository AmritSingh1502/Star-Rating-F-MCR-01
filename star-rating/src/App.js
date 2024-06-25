import './App.css';
import StarRating from "./components/StarRating";

function App() {
  return (
    <div className='main-container'>
      <StarRating starCount={10} />
    </div>
  )
}

export default App;

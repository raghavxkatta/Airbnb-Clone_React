import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Katie from "./assets/katie.png"
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    {/* so now we have a reusable component that when we use everytime I create an instance of my card, I pass in these props. I should be able to get different cards showing up on my list */}
    <Card
    img={Katie}
    rating ="5.0"
    reviewCount= {6}
    country="USA"
    title="Life Lessons with Katie Zaferes"
    price={136}/>
          </div>
  );
}

export default App;

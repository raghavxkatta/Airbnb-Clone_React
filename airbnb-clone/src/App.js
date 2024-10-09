import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data  from './data'; 
console.log(data  )
function App() {
  const cards=data.map(item=>{
return(
  <Card
  img={item.coverImg}
  rating={item.stats.rating}
  reviewCount= {item.stats.reviewCount}
  location={item.location}
  title={item.title}
  price={item.price}
/>
)
  })
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    {cards}
  
    
          </div>
  );
}

export default App;

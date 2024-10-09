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
  key={item.id} /* this is necessary to give every item should have one unique identity otherwise it would show error */
    img={item.coverImg}
  rating={item.stats.rating}
  reviewCount= {item.stats.reviewCount}
  location={item.location}
  title={item.title}
  price={item.price}
  open={item.openSpots}
/>
)
  })
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <section className="cards--list">
    {cards}
    </section>
    
          </div>
  );
}

export default App;

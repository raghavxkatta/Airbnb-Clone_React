import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data  from './data'; 
console.log(data  )
function App() {
  const cards=data.map(item=>(
  <Card
  key={item.id} /* this is necessary to give every item should have one unique identity otherwise it would show error */
    /* cleaned all the properties from here and defined them in Card.js through data.js */
     title={item.title}
    description={item.description}
    price={item.price}
    coverImg={item.coverImg}
    stats={item.stats}
    location={item.location}
    openSpots={item.openSpots}
    />
))
  
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

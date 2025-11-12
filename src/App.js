import './App.css';
import map from "./Assents/Map.svg"
import Header from "./Components/Header/Header"
import Section from "./Pages/Section/Section"
import Article from "./Pages/Article/Article"
import Aside from "./Pages/Aside/Aside"
import Activ from "./Pages/Activ/Activ"
import Hero from "./Pages/Hero/Hero"

function App() {
  return (
    <div className="container">
      <Header />
      <Section />
      <Article />
      <Aside />
      <Activ />
      <Hero />
      <img className='map' src={map} />
    </div>
  );
}

export default App;

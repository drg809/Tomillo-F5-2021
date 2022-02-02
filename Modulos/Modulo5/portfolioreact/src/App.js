import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Seccion from './components/Seccion';
import Mosaico from './components/Mosaico';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Seccion />
      <Mosaico />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

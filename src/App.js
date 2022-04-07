import './styles/index.scss'
import Header from './components/Header';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <main id='main'>
       <Home/>
       <Skills/>
       <Projects/>
       <Contact/>
      </main>
    </div>
  );
}

export default App;

import './styles/index.scss'
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
       <Home/>
      </main>
    </div>
  );
}

export default App;

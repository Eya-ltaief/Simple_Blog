import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BasicExample from './components/Header';
import Hero from './components/Hero';
import Headline from './components/Headline';
import Posts from './components/Posts';
import NewsCarousel from './components/NewsCarousel';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicExample/>
        <Headline/>
        <Hero/>
        <Posts/>
        <NewsCarousel/>
      </header>
    </div>
  );
}

export default App;

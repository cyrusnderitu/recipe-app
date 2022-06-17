import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Home />
    </div>
  );
}

export default App;

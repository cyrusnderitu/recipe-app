import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [vitamins, setVitamins] = useState([])

  useEffect(()=>{
    getRecipe()
    
  }, [])
  const getRecipe = async ()=> {

    const checkStore = localStorage.getItem('veggie')
    if(checkStore){
      setVitamins(JSON.parse(checkStore))
    }else{
      const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=7`)
      const data = await res.json()
      localStorage.setItem('veggie', JSON.stringify(data.recipes))
      setVitamins(data.recipes)
    }

  }
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Home vitamins={vitamins}/>
    </div>
  );
}

export default App;

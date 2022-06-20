import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Cuisine from './pages/Cuisine/Cuisine';
import Search from './pages/Search/Search';

import './App.css';
import { useEffect, useState } from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'

function App() {


  const [vitamins, setVitamins] = useState([])
  const [popular, setPopular] = useState([])

  useEffect(()=>{
    getVeggies()
    getPopular()
  }, [])

  const getVeggies = async ()=> {

    const vegStore = localStorage.getItem('veggie')
    if(vegStore){
      setVitamins(JSON.parse(vegStore))
    }else{
      const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`)
      const data = await res.json()
      localStorage.setItem('veggie', JSON.stringify(data.recipes))
      setVitamins(data.recipes)
    }

  }
  const getPopular = async ()=> {

    const popStore = localStorage.getItem('popular')
    if(popStore){
      setPopular(JSON.parse(popStore))
    }else{
      const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
      const data = await res.json()
      localStorage.setItem('popular', JSON.stringify(data.recipes))
      setPopular(data.recipes)
    }

  }

  return (
    <div className="App">
        <BrowserRouter >
          <Navbar />
          <Header />
          <Routes >
            <Route path='/' element={<Home vitamins={vitamins} popular={popular}/>}/>
            <Route path='/cuisine/:type' element={<Cuisine />}/>
            <Route path='/meal/:search' element={<Search />}/>
          </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;

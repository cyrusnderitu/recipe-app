import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import useStyles from './styles'
import {NavLink} from 'react-router-dom'

function Search() {

  const [search, setSearch] = useState([])
  let params = useParams()
  let classes = useStyles()

  useEffect(()=>{
    getSearch(params.search)
  }, [params.search])


  const getSearch = async (name)=> {
      const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
      const data = await res.json()
      setSearch(data.results)
  }

  const searchElement = search.map((meal)=>{
                      return(
                      <div className={classes.card} key={meal.id}>
                        <NavLink to={'/recipe/' + meal.id}>
                            <img src={meal.image} alt={meal.title} className={classes.cardImage} />
                            <h4 className={classes.cardTitle}>{meal.title}</h4>
                        </NavLink>
                      </div>
                      )
                  })
  return (
    <div className={classes.container}>
        <div className={classes.grid}>
            {searchElement}
        </div>
  </div>  
  )
}

export default Search

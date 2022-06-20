import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import useStyles from './styles'

function Cuisine() {

  const [cuisine, setCuisine] = useState([])
  let params = useParams()

  useEffect(()=>{
    getCuisine(params.type)
    console.log(params.type)
  }, [params.type])


  const getCuisine = async (name)=> {
      const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
      const data = await res.json()
      setCuisine(data.results)
  }

  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        {cuisine.map((meal)=>{
          return(
            <div className={classes.card}>
              <img src={meal.image} alt={meal.title} className={classes.cardImage} />
              <h4 className={classes.cardTitle}>{meal.title}</h4>
            </div>
          )
        })}
        </div>
    </div>  
  )
}

export default Cuisine

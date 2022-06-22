import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import {useParams} from 'react-router-dom'

function Recipe() {

  const classes = useStyles()
  const params = useParams()

  const [recipeDetails, setRecipeDetails] = useState({})

  useEffect(()=>{
    getRecipe(params.name)
  }, [params.name])

  const getRecipe = async (name)=> {
    const data = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const res = data.json()
    setRecipeDetails(res)
  } 

  return (
    <div>
      <h2 className={classes.title}>
        Todays, Recipe is for {recipeDetails.title} 
      </h2>
    </div>
  )
}

export default Recipe

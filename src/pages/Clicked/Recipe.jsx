import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import {useParams} from 'react-router-dom'

function Recipe() {

  const classes = useStyles()
  const params = useParams()

  const [recipeDetails, setRecipeDetails] = useState({})
  const [activeButton, setActiveButton] = useState('meal')

  useEffect(()=>{
    getRecipe(params.name)
  }, [params.name])

  const getRecipe = async (name)=> {
    const data = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const res =  await data.json()
    setRecipeDetails(res)
  } 

  console.log({recipeDetails})
  return (
    <div className={classes.container}>
      <div className={classes.display}>
        <div className={classes.displayShow}>
          <h3 className={classes.displayTitle}>{recipeDetails.title}</h3>
          <div className={classes.displayImage}>
            <img src={recipeDetails.image} alt={recipeDetails.title} className={classes.displayImg} />
          </div>
        </div>
        <div className={classes.displayData}>
          <div className={classes.buttons}>
            <button className={classes.btn} onClick={()=> setActiveButton('meal')}>Meal Type</button>
            <button className={classes.btn} onClick={()=> setActiveButton('ingredient')}>Ingredients</button>
          </div>
          {activeButton === 'meal' && (
                      <ul className={classes.displayInfo}>
                      <li>Dish Type: <span className={classes.subSection}> {recipeDetails.dishTypes}</span> </li>
                      <li>Cuisine: <span  className={classes.subSection}> {recipeDetails.cuisines ? recipeDetails.cuisines : 'None'}</span> </li>
                      <li>Diets: <span  className={classes.subSection}> {recipeDetails.diets ? recipeDetails.diets : 'None'}</span> </li>
                      <li>Price per serving: <span  className={classes.subSection}>$ {recipeDetails.pricePerServing}</span> </li>
                    </ul>
          )}
          {activeButton === 'ingredient' && (
                    <ul className={classes.displayInfo}>
                        {recipeDetails.extendedIngredients.map((ingredient)=>(
                          <li key={ingredient.id} className={classes.displayList}>{ingredient.original}</li>
                        ))}
                    </ul>
          )}

        </div>
      </div>
      <div className={classes.data}>
        <div className={classes.summary}>
        <h3 className={classes.summaryTitle}>Meal Summary</h3>
          <p dangerouslySetInnerHTML={{__html: recipeDetails.summary}}></p>
        </div>
        <div className={classes.instruction}>
          <h3 className={classes.summaryTitle}>Instruction</h3>
          <p dangerouslySetInnerHTML={{__html: recipeDetails.instructions}}></p>
        </div>
      </div>
    </div>
  )
}

export default Recipe

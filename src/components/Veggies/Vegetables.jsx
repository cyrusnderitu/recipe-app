import React from 'react'
import useStyles from './styles'
import {Link} from 'react-router-dom'

function Vegetables({recipe}) {

  const classes = useStyles()
  return (
    <div className={classes.card}>
      <Link to={'/recipe/' + recipe.id}>
          <img src={recipe.image} alt={recipe.cardTitle} className={classes.cardImg}/>
          <p className={classes.cardTitle}>{recipe.title}</p>
      </Link>
    </div>
  )
}

export default Vegetables

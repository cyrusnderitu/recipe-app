import React from 'react'
import useStyles from './styles'
import {Link} from 'react-router-dom'

function Popular({recipe}) {
    const classes = useStyles()
  return (
    <div className={classes.card}>
      <Link to={'/recipe/' + recipe.id}>
          <div className={classes.cardCont} />
          <img src={recipe.image} alt={recipe.cardTitle} className={classes.cardImg}/>
          <p className={classes.cardTitle}>{recipe.title}</p>
      </Link>
    </div>
  )
}

export default Popular


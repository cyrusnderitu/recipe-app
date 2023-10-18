import React from 'react'
import useStyles from './styles'
import {NavLink} from 'react-router-dom'

function Popular({recipe}) {
    const classes = useStyles()
  return (
    <div className={classes.card}>
      <NavLink to={'/recipe/' + recipe.id}>
          <div className={classes.cardCont} />
          <img src={recipe.image} alt={recipe.cardTitle} className={classes.cardImg}/>
          <p className={classes.cardTitle}>{recipe.title}</p>
      </NavLink>
    </div>
  )
}

export default Popular


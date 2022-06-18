import React from 'react'
import useStyles from './styles'

function Popular({recipe}) {
    const classes = useStyles()
  return (
    <div className={classes.card}>
      <div className={classes.cardCont} />
        <img src={recipe.image} alt={recipe.cardTitle} className={classes.cardImg}/>
        <p className={classes.cardTitle}>{recipe.title}</p>

    </div>
  )
}

export default Popular


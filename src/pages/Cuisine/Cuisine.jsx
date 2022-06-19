import React from 'react'
import useStyles from './styles'

function Cuisine() {

  const classes = useStyles()
  return (
    <div className={classes.container}>
        <div className={classes.cuisine}>
            <h2 className={classes.title}>Cuisines Section</h2>
        </div>
    </div>
  )
}

export default Cuisine

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import useStyles from './styles'

function Header() {
  
  const classes = useStyles()
  return (
    <div className={classes.header}>
        <div className={classes.formContainer}>
            <form className={classes.form}>
                <FontAwesomeIcon icon={faBowlFood}/>
                <input 
                    type="text" 
                    name="recipe" 
                    placeholder='Enter a Meals Name'
                    className={classes.formInput}
                />
            </form>
        </div>
    </div>
  )
}

export default Header

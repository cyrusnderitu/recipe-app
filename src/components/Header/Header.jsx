import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faPizzaSlice, faHamburger, faBowlRice } from '@fortawesome/free-solid-svg-icons'
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
            <div className={classes.lists}>
              <div className={classes.meals}>
                  <FontAwesomeIcon icon={faPizzaSlice}  size='lg'/>
                  <h2 className={classes.mealsTitle}>Italian</h2>
              </div>
              <div className={classes.meals}>
                  <FontAwesomeIcon icon={faHamburger} size='lg'/>
                  <h2 className={classes.mealsTitle}>American</h2>
              </div>
              <div className={classes.meals}>
                  <FontAwesomeIcon icon={faPizzaSlice}  size='lg'/>
                  <h2 className={classes.mealsTitle}>Italian</h2>
              </div>
              <div className={classes.meals}>
                  <FontAwesomeIcon icon={faBowlRice}  size='lg'/>
                  <h2 className={classes.mealsTitle}>Japanese</h2>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header

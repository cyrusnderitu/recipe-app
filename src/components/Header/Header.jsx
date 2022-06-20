import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faPizzaSlice, faHamburger, faBowlRice } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import useStyles from './styles'

function Header() {
  
  const [input, setInput]= useState('')
  const classes = useStyles()
  const navigate = useNavigate()

  const onSubmit = (e)=>{
    e.preventDefault()
    navigate('/meal/' + input)
  } 

  return (
    <div className={classes.header}>
        <div className={classes.formContainer}>
            <form className={classes.form} onSubmit={onSubmit}>
                <FontAwesomeIcon icon={faBowlFood}/>
                <input 
                    type="text" 
                    name="recipe" 
                    placeholder='Cuisine Name'
                    className={classes.formInput}
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                />
            </form>
            <div className={classes.lists}>
              <div className={classes.meals} onClick={()=>{navigate('/cuisine/Italian')}}>
                  <FontAwesomeIcon icon={faPizzaSlice} size='lg'/>
                  <h2 className={classes.mealsTitle}>Italian</h2>
              </div>
              <div className={classes.meals} onClick={()=>{navigate('/cuisine/American')}}>
                  <FontAwesomeIcon icon={faHamburger} size='lg'/>
                  <h2 className={classes.mealsTitle}>American</h2>
              </div>
              <div className={classes.meals} onClick={()=>{navigate('/cuisine/Thai')}}>
                  <FontAwesomeIcon icon={faPizzaSlice} size='lg'/>
                  <h2 className={classes.mealsTitle}>Thai</h2>
              </div>
              <div className={classes.meals} onClick={()=>{navigate('/cuisine/Chinese')}}>
                  <FontAwesomeIcon icon={faBowlRice} size='lg'/>
                  <h2 className={classes.mealsTitle}>Chinese</h2>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header

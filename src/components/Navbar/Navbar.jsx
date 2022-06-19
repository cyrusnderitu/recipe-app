import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import useStyles from './styles'

function Navbar() {

  const classes = useStyles()
  return (
    <div className={classes.navbar}>
        <div className={classes.container}>
            <nav className={classes.nav}>
                <NavLink to={'/'} className={classes.navLogo}>
                    <FontAwesomeIcon icon={faUtensils} />
                    <span className={classes.navTitle}>Delicious Meals</span>
                </NavLink>
            </nav>
        </div>
      
    </div>
  )
}

export default Navbar

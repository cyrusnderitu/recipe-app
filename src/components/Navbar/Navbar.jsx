import React from 'react'
import useStyles from './styles'

function Navbar() {

  const classes = useStyles()
  return (
    <div className={classes.navbar}>
        <div className={classes.container}>
            <nav className={classes.nav}>
                <div className={classes.navLogo}>
                    <i className="fa-solid fa-fork-knife"></i>
                    <span className={classes.navTitle}>Delicious Meals</span>
                </div>
            </nav>
        </div>
      
    </div>
  )
}

export default Navbar

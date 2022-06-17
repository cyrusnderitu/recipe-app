import {makeStyles} from '@material-ui/core'


export default makeStyles (()=> ({
    navbar: {
        width: '100%',
        height: '2.5rem'
    },
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto'
    },
    navLogo:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily: 'Poppins',
        fontSize:'2rem',
        color: '#2c3539'
    },
}))
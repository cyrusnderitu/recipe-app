import {makeStyles} from '@material-ui/core'


export default makeStyles (()=> ({
    navbar: {
        width: '100%',
        height: '3rem',
    },
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        maxWidth: '1024px'
    },
    nav:{
        width: '100%',
    },
    navLogo:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily: 'Poppins',
        fontSize:'2rem',
        color: '#2c3539',
        gap: '1rem'
    },
    navTitle: {
        fontFamily: 'Satisfy',
        fontWeight: 'bolder'
    },
}))
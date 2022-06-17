import {makeStyles} from '@material-ui/core'


export default makeStyles (()=> ({
    header: {
        width: '100%',
        margin: '0 auto'
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '968px'
    },
    form: {
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: '#2c3539',
        padding: '10px 15px',
        color: 'edeae0',
        columnGap: '1rem',
        borderRadius: '.5rem'
    },
    formInput:{
        fontFamily: 'Poppins',
        fontSize: '1rem',
        
    }
}))
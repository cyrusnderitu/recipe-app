import {makeStyles} from '@material-ui/core'

export default makeStyles (()=> ({
    header: {
        width: '100%',
        maxWidth: '968px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center'
    },
    formContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        margin: '20px 0',
    },
    form: {
        width: '60%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#2c3539',
        padding: '10px 15px',
        color: '#edeae0',
        columnGap: '1rem',
        borderRadius: '.5rem'
    },
    formInput:{
        fontFamily: 'Poppins',
        fontSize: '1rem',
        background: 'none',
        outline: 'none',
        border: 'none',
        color: '#EDEAE0',
        paddingRight: '15px'
        
    }
}))
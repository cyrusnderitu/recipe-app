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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

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
        
    },
    // MENU FILTERS
    lists:{
        display: 'flex',
        marginTop: '2rem',
        columnGap: '2rem',
        marginBottom: '-2rem'
    },
    meals: {
        display: 'flex',
        alignItems: 'center',
        columnGap: '.5rem',
        cursor: 'pointer',
        padding: '.75rem .968rem',
        backgroundColor: 'burlywood',
        borderRadius: '.75rem',
    },
    mealsTitle: {
        fontSize: '14px',
        fontWeight: '400'
    },

}))
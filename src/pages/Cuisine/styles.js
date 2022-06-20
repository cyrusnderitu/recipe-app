import {makeStyles} from '@material-ui/core'


export default makeStyles (()=> ({
    container:{
        width: '100%',
        maxWidth: '1028px',
        padding: '1.5rem 0 3rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
        gridGap: '3rem'
    },
    card: {
        borderRadius: '.75rem',
        overflow: 'hidden',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        paddingBottom: '3rem'
    },
    cardImage:{
        width: '100%'
    },
    cardTitle: {
        fontWeight: '400',
        fontSize: '14px',
        textAlign: 'center'
    },
}))
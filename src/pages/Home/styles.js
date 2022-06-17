import {makeStyles} from '@material-ui/core'


export default makeStyles (()=> ({
    container:{
        width: '100%',
        maxWidth: '1028px',
        padding: '1.5rem 0 3rem'
    },
    home:{
        padding: '10px',
    },
    title: {
        marginBottom: '2rem'
    },
    card: {
        display: 'grid',
        gridTemplateRows: 'repeat(2, 130px)',
        borderRadius: '.75rem',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        overflow: 'hidden',
        marginBottom: '2rem'
    },
    cardCont:{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '1.5rem',
        
    },
    cardImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    cardTitle: {
        fontSize: '12px',
        margin: '1.5rem .5rem 0  '
    }
}))
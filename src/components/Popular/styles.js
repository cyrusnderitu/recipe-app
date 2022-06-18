import {makeStyles} from '@material-ui/core'


export default makeStyles (()=> ({
    card: {
        display: 'grid',
        gridTemplateRows: 'repeat(2, 150px)',
        borderRadius: '.75rem',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        overflow: 'hidden',
        marginBottom: '2rem'
    },
    cardImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    cardTitle: {
        fontSize: '12px',
        margin: '1.5rem .5rem 0',
    }
}))
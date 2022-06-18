import {makeStyles} from '@material-ui/core'


export default makeStyles (()=> ({
    card: {
        display: 'grid',
        gridTemplateRows: 'repeat(2, 150px)',
        borderRadius: '.75rem',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        overflow: 'hidden',
        marginBottom: '2rem',
        position: 'relative'
    },
    cardCont: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))',
        zIndex: '1'
    },
    cardImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute'
    },
    cardTitle: {
        fontSize: '18px',
        top: '70%',
        bottom: '30%',
        marginLeft: '2rem',
        position: 'absolute',
        color:'white',
        fontWeight:'600',
        zIndex: '2'
    }
}))
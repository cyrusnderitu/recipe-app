import { makeStyles } from '@material-ui/core'

export default makeStyles(()=> ({
   container: {
      width: '100%',
      maxWidth: '1024px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
   },
   display: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      marginTop: '3rem',
      width: '100%',
      // gap: '10rem'
   },
   displayImage: {
      width: '500px',
      height: 'auto',
      borderRadius: '2rem',
      overflow:'hidden'
   },
   displayImg: {
      width: '100%',
      objectFit: 'cover'
   },
   displayData: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
   },
   displayInfo: {
      marginTop: '2rem'
   },
   displayList: {
      listStyle: 'circle',
      marginLeft: '2rem',
   },
   buttons: {
      display: 'flex',
      marginTop: '2rem',
      columnGap: '1rem'
   },
   btn:{
      fontFamily: 'Poppins',
      textTransform: 'uppercase',
      fontSize: '1rem',
      padding: '10px 20px',
      cursor: 'pointer'
   },
   subSection: {
      fontSize: '.936rem',
      color: 'burlywood',
      marginLeft: '10px'
   },
   summaryTitle: {
      marginTop: '1.25rem',
      fontFamily: 'Satisfy',
      lineHeight: '1.6',
      fontSize: '1.5rem'
   }

}))
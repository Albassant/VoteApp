import green from 'material-ui/colors/green';

const footerHeight = 182;

export default {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: `calc(100vh - ${footerHeight}px)`,
    paddingTop: '84px',
    paddingBottom: '64px',
    boxSizing: 'border-box'
  },
  regForms: {
    content: {
      width: '25%',
      minWidth: '350px',
      margin: '0 auto',
      textAlign: 'center',
    },
    actions: {
      justifyContent: 'center',
    },
    field: {
      margin: '20px 40px'
    },
    title: {
      marginTop: '20px',
      paddingTop: '20px'
    },
    message: {
      color: green[500],
      marginTop: '10px'
    }
  }
};
import green from 'material-ui/colors/green';

const footerHeight = 182;

const common = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: `calc(100vh - ${footerHeight}px)`,
    paddingTop: '84px',
    paddingBottom: '64px',
    boxSizing: 'border-box',
    alignItems: 'center',
  },
  actions: {
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none'
  },
  white: {
    color: '#fff'
  },
  title: {
    margin: '20px 0',
    paddingTop: '20px'
  },
};

const forms = {
  content: {
    position: 'relative',
    width: '50%',
    minWidth: '350px',
    textAlign: 'center',
    paddingLeft: '40px',
    paddingRight: '40px',
  },
  field: {
    margin: '20px auto',
    position: 'relative',
    display: 'inline-block',
    width: '80%'
  },
}

const regForms = {
  content: {
    width: '25%',
    minWidth: '350px',
    margin: '0 auto',
    textAlign: 'center',
  },
  field: {
    margin: '20px 40px'
  },
  message: {
    color: green[500],
    marginTop: '10px'
  }
};



export { common, regForms, forms }
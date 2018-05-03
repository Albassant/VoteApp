import green from 'material-ui/colors/green';

const footerHeight = 182;

const common = {
  container: {
    height: `calc(100% - ${footerHeight}px)`,
    paddingTop: '84px',
    paddingBottom: '64px',
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
  black: {
    color: 'rgba(0, 0, 0, 0.87)'
  },
  blackLight: {
    color: 'rgba(0, 0, 0, 0.54)'
  },
  orange: {
    color: '#ffb300'
  },
  lightOrange: {
    color: '#ffd54f'
  }
};

const forms = {
  content: {
    width: '25%',
    minWidth: '280px',
    textAlign: 'center',
    padding: '40px',
    margin: '0 auto'
  },
  field: {
    margin: '20px 0',
    position: 'relative',
  },
}

const regForms = {
  content: {
    width: '25%',
    minWidth: '280px',
    textAlign: 'center',
    padding: '40px',
    margin: '0 auto'
  },
  field: {
    margin: '20px 0px',
    position: 'relative',
  },
  message: {
    color: green[500],
    marginTop: '10px'
  }
};



export { common, regForms, forms }
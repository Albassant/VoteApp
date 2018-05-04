import green from 'material-ui/colors/green';

const footerHeight = 182;

const common = {
  actions: {
    justifyContent: 'center',
    marginTop: '10px'
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
    width: '50%',
    minWidth: '280px',
    textAlign: 'center',
    padding: '40px',
    margin: '0 auto',
  },
  field: {
    margin: '20px 0',
    position: 'relative',
  },
}

const regForms = {
  content: {
    ...forms.content,
    width: '30%'
  },
  field: forms.field,
  message: {
    color: green[500],
    marginTop: '10px'
  }
};



export { common, regForms, forms }
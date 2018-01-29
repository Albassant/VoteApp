import React, { PropTypes } from 'react';
import Auth from '../modules/Auth';
import Test from '../components/Test.jsx';
import axios from 'axios';

class TestPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secretData: ''
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    axios.get('/api/test', { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
    .then(response => {
      if (response.status === 200) {
        this.setState({
          secretData: response.data.message
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  handleClick() {
    axios.get('/api/polls', { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
    .then(response => {
      if (response.status === 200) {
        console.log(response.data);  
      }
      this.props.history.replace('/polls');
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  render() {
    return (<Test secretData={this.state.secretData} onClick={this.handleClick}/>);
  }
}

export default TestPage;

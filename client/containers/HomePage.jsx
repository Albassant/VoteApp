import React, { PropTypes } from 'react';
import HomeView from '../components/HomePage.jsx';
import axios from 'axios';
import Auth from '../modules/Auth';
import querystring from 'querystring';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.onNewClick = this.onNewClick.bind(this);
    this.onPollsClick = this.onPollsClick.bind(this);
  }

  onNewClick(event) {
    this.props.history.push('/new');
  }
  
  onPollsClick(event) {
    this.props.history.push('/mypolls');
  }

  render() {
    return (<HomeView onNewClick={this.onNewClick} onPollsClick={this.onPollsClick} />);
  }
}

export default HomePage;

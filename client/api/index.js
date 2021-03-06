import axios from 'axios';
import Auth from '../modules/Auth';
//https://voteapp-albassant.c9users.io/
//https://myvoteapp.herokuapp.com/
const HTTP = function() {
  return axios.create({
    baseURL: `https://voteapp-albassant.c9users.io/`,
    headers: {
      Authorization: `Bearer ${Auth.getToken()}`
    }
  });
}

export default {
  receiveAllPolls() {
    return HTTP().get('all/polls');
  },

  receivePolls() {
    return HTTP().get('api/polls');
  },

  createPoll(data) {
    return HTTP().post('api/polls', data);
  },

  deletePoll(pollId) {
    return HTTP().delete(`api/polls/${pollId}`);
  },

  getPoll(pollId) {
    return HTTP().get(`api/polls/${pollId}`);
  },

  updatePoll(pollId, data) {
    return HTTP().put(`api/polls/${pollId}`, data);
  }
}
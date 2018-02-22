import axios from 'axios';
import Auth from '../modules/Auth';

const HTTP = function() {
  return axios.create({
    baseURL: `https://voteapp-albassant.c9users.io/api/`,
    headers: {
      Authorization: `Bearer ${Auth.getToken()}`
    }
  });
}

export default {
  receivePolls() {
    return HTTP().get('polls');
  },

  createPoll(data) {
    return HTTP().post('polls', data);
  },

  deletePoll(pollId) {
    return HTTP().delete(`polls/${pollId}`);
  },

  getPoll(pollId) {
    return HTTP().get(`polls/${pollId}`);
  },

  updatePoll(pollId, data) {
    console.log(data);
    return HTTP().put(`polls/${pollId}`, data);
  }
}
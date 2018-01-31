import axios from 'axios';
import Auth from '../modules/Auth';

export default {
  listPolls() {
    return axios.get('api/polls', { headers: {'Authorization': `bearer ${Auth.getToken()}`} });
  },

  createPoll(data) {
    return axios.post('api/polls', data, { headers: {'Authorization': `bearer ${Auth.getToken()}`} });
  },

  deletePoll(pollId) {
    return axios.delete(`api/polls/${pollId}`, { headers: {'Authorization': `bearer ${Auth.getToken()}`} });
  }
}
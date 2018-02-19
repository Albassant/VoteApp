import axios from 'axios';
import Auth from '../modules/Auth';

const HTTP = axios.create({
  baseURL: `https://spotless-needle.glitch.me/api/`,
  headers: {
    Authorization: `Bearer ${Auth.getToken()}`
  }
})

export default {
  listPolls() {
    return HTTP.get('polls');
  },

  createPoll(data) {
    return HTTP.post('polls', data);
  },

  deletePoll(pollId) {
    return HTTP.delete(`polls/${pollId}`);
  },
  
  loadPoll(pollId) {
    return HTTP.get(`polls/${pollId}`);
  },
  
  updatePoll(pollId, data) {
    console.log(data);
    return HTTP.put(`polls/${pollId}`, data);
  }
}
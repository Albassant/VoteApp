import axios from 'axios';

export default {
  listPolls() {
    return axios.get('api/polls');
  },

  createPoll(data) {
    return axios.post('api/polls', data);
  },

  deletePoll(pollId) {
    return axios.delete(`api/polls/${pollId}`);
  }
}
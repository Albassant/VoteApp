import axios from 'axios';

export default {
  login(userData) {
    return axios.post('/auth/login', userData);
  },
  register(userData) {
    return axios.post('/auth/register', userData);
  }
}

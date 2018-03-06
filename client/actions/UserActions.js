import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';
import Auth from '../modules/Auth';

import API from '../auth';

const UserActions = {
  login(userData) {
    API.login(userData)
      .then(({ data }) => {
        Auth.authenticateUser(data.token);
        AppDispatcher.dispatch({
          type: ActionTypes.LOGIN_SUCCESS,
          message: data.message,
          userData: data.userData
        })
      })
      .catch(error =>
        AppDispatcher.dispatch({
          type: ActionTypes.LOGIN_FAIL,
          errors: error.response.data.errors
        })
      );
  },

  register(userData) {
    API.register(userData)
      .then(({ data }) => {
        console.log(data.message);
        AppDispatcher.dispatch({
          type: ActionTypes.REGISTER_SUCCESS,
          message: data.message
        })
      })
      .catch(error => {
        console.log('register failed ', error.response.data.message);
        console.log('errors ', error.response.data.errors);
        AppDispatcher.dispatch({
          type: ActionTypes.REGISTER_FAIL,
          errors: error.response.data.errors
        })
      });
  },

  update(userData) {
    console.error('not implemented');
  },
};

export default UserActions;

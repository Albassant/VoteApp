import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';

import API from '../api';

const PollActions = {

  loadAllPolls() {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_ALL_POLLS_REQUEST
    });

    API.receiveAllPolls()
      .then(({ data }) =>
        AppDispatcher.dispatch({
          type: ActionTypes.RECEIVE_ALL_POLLS_SUCCESS,
          polls: data
        })
      )
      .catch(err =>
        AppDispatcher.dispatch({
          type: ActionTypes.RECEIVE_ALL_POLLS_FAIL,
          error: err.response.data.error
        })
      );
  },

  loadPolls() {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_POLLS_REQUEST
    });

    API.receivePolls()
      .then(({ data }) =>
        AppDispatcher.dispatch({
          type: ActionTypes.RECEIVE_POLLS_SUCCESS,
          polls: data
        })
      )
      .catch(err => {

        console.log(err);
        AppDispatcher.dispatch({
          type: ActionTypes.RECEIVE_POLLS_FAIL,
          error: err
        })}
      );
  },

  getPoll(pollId) {
    AppDispatcher.dispatch({
      type: ActionTypes.GET_POLL_REQUEST
    });

    API.getPoll(pollId)
      .then(({ data }) =>
        AppDispatcher.dispatch({
          type: ActionTypes.GET_POLL_SUCCESS,
          poll: data
        })
      )
      .catch(err =>
        AppDispatcher.dispatch({
          type: ActionTypes.GET_POLL_FAIL,
          error: err.response.data.error
        })
      );
  },

  createPoll(poll) {
    API.createPoll(poll)
      .then(({ data }) => {
        this.loadPolls();
        AppDispatcher.dispatch({
          type: ActionTypes.ADD_NEW_POLL_SUCCESS,
          poll: data
        })
      })
      .catch(err =>
        AppDispatcher.dispatch({
          type: ActionTypes.ADD_NEW_POLL_FAIL,
          error: err.response.data.error
        })
      );
  },

  updatePoll(pollId, optionIdx) {
    API.updatePoll(pollId, optionIdx)
      .then(({ data }) => {
        this.getPoll(pollId);
      })
      .catch(err =>
        console.error(err.response.data.error)
      );
  },

  deletePoll(pollId) {
    API.deletePoll(pollId)
      .then(() =>
        this.loadPolls()
      )
      .catch(err =>
        console.error(err.response.data.error)
      );
  }
};

export default PollActions;
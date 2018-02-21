import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';

import API from '../api';

const PollActions = {

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
      .catch(err =>
        AppDispatcher.dispatch({
          type: ActionTypes.RECEIVE_POLLS_FAIL,
          error: err
        })
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
          error: err
        })
      );
  },

  createPoll(poll) {
    return API.createPoll(poll)
      .then(({ data }) => {
        this.receivePolls();
      })
      .catch(err =>
        console.error(err)
      );
  },

  updatePoll(pollId, optionIdx) {
    console.log("pollId: " + pollId + " optionIdx: " + optionIdx);
    return API.updatePoll(pollId, optionIdx)
      .then(({ data }) => {
        this.receivePolls();
      })
      .catch(err =>
        console.error(err)
      );
  },

  deletePoll(pollId) {
    API.deletePoll(pollId)
      .then(() =>
        this.receivePolls()
      )
      .catch(err =>
        console.error(err)
      );
  }
};

export default PollActions;
import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';

import API from '../api';

const PollActions = {
  
  loadPolls() {
    AppDispatcher.dispatch({
      type: ActionTypes.LOAD_POLLS_REQUEST
    });

    API.listPolls()
      .then(({ data }) =>
        AppDispatcher.dispatch({
          type: ActionTypes.LOAD_POLLS_SUCCESS,
          polls: data
        })
      )
      .catch(err =>
        AppDispatcher.dispatch({
          type: ActionTypes.LOAD_POLLS_FAIL,
          error: err
        })
      );
  },
  
  loadPoll(pollId) {
    return API.loadPoll(pollId)
      .then(() => console.log('voted'))
      .catch(err =>
          console.error(err)
        );
  },

  createPoll(poll) {
    return API.createPoll(poll)
      .then(({ data }) => {
        this.loadPolls();
      })
      .catch(err =>
        console.error(err)
      );
  },
  
  updatePoll(pollId, optionIdx) {
    return API.updatePoll(pollId, optionIdx)
      .then(({ data }) => {
        this.loadPolls();
      })
      .catch(err =>
        console.error(err)
      );
  },

  deletePoll(pollId) {
    API.deletePoll(pollId)
      .then(() =>
        this.loadPolls()
      )
      .catch(err =>
        console.error(err)
      );
  }
};

export default PollActions;
import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher';
import AppConstants from '../constants';

const CHANGE_EVENT = 'change';
const MESSAGE_RECEIVED = 'message_received';

let _polls = [];
let _poll = {};
let _allPolls = [];

let _loadingError = null;
let _isLoading = true;

class PollStore extends EventEmitter {
    constructor() {
        super();

        // Registers action handler with the Dispatcher.
        AppDispatcher.register(this._registerToActions.bind(this));
    }

    // Switches over the action's type when an action is dispatched.
    _registerToActions(action) {
        switch(action.type) {
        case AppConstants.RECEIVE_ALL_POLLS_REQUEST: {
            _isLoading = true;
            this.emitChange();
            break;
        }

        case AppConstants.RECEIVE_ALL_POLLS_SUCCESS: {
            _isLoading = false;
            _allPolls = action.polls;
            _loadingError = null;
            this.emitChange();
            break;
        }

        case AppConstants.RECEIVE_ALL_POLLS_FAIL: {
            _loadingError = action.error;
            this.emitChange();
            break;
        }

        case AppConstants.RECEIVE_POLLS_REQUEST: {
            _isLoading = true;
            this.emitChange();
            break;
        }

        case AppConstants.RECEIVE_POLLS_SUCCESS: {
            _isLoading = false;
            _polls = action.polls;
            _loadingError = null;
            this.emitChange();
            break;
        }

        case AppConstants.RECEIVE_POLLS_FAIL: {
            _loadingError = action.error;
            this.emitChange();
            break;
        }

        case AppConstants.GET_POLL_REQUEST: {
            _isLoading = true;
            this.emitChange();
        }

        case AppConstants.GET_POLL_SUCCESS: {
            _isLoading = false;
            _poll = action.poll;
            _loadingError = null;
            this.emitChange();
            break;
        }

        case AppConstants.GET_POLL_FAIL: {
            _loadingError = action.error;
            this.emitChange();
            break;
        }

        case AppConstants.ADD_NEW_POLL_SUCCESS: {
            _poll = action.poll;
            this.emitChange();
            break;
        }

        case AppConstants.ADD_NEW_POLL_FAIL: {
            _loadingError = action.error;
            this.emitChange();
            break;
        }

        default: {
          //console.log('No such handler in PollStore');
        }
      }
    }

    isLoading() {
        return _isLoading;
    }

    getError() {
        return _loadingError;
    }

    getPolls() {
        return _polls;
    }

    getAllPolls() {
        return _allPolls;
    }

    getPoll() {
        return _poll;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    emitMessageReceived() {
        this.emit(MESSAGE_RECEIVED);
    }

    // Hooks a React component's callback to the CHANGED event.
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    // Removes the listener from the CHANGED event.
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    // Hooks a React component's callback to the MESSAGE_RECEIVED event.
    addMessageReceivedListener(callback) {
        this.on(MESSAGE_RECEIVED, callback);
    }

    // Removes the listener from the MESSAGE_RECEIVED event.
    removeMessageReceivedListener(callback) {
        this.removeListener(MESSAGE_RECEIVED, callback);
    }
}


export default new PollStore();

import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher';
import AppConstants from '../constants';

const CHANGE_EVENT = 'change';

let _polls = [];
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
        case AppConstants.LOAD_POLLS_REQUEST: {
            _isLoading = true;

            this.emitChange();
            break;
        }

        case AppConstants.LOAD_POLLS_SUCCESS: {
            _isLoading = false;
            _polls = action.polls;
            _loadingError = null;

            this.emitChange();
            break;
        }

        case AppConstants.LOAD_POLLS_FAIL: {
            _loadingError = action.error;

            this.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
      }
    }
 
    isLoading() {
        return _isLoading;
    }

    getPolls() {
        return _polls;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    // Hooks a React component's callback to the CHANGED event.
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
 
    // Removes the listener from the CHANGED event.
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}


export default new PollStore();

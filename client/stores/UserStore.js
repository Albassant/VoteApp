import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher';
import AppConstants from '../constants';

const CHANGE_EVENT = 'change';

let _user = '';
let _errors = {};
let _message = '';
let _success = false;

class UserStore extends EventEmitter {
  constructor() {
    super();
    // Registers action handler with the Dispatcher.
    AppDispatcher.register(this._registerToActions.bind(this));
  }

  // Switches over the action's type when an action is dispatched.
  _registerToActions(action) {
    switch(action.type) {
      case AppConstants.LOGIN_SUCCESS: {
        _user = action.userData;
        _message = action.message;
        _errors = {};
        _success = true;
        this.emitChange();
        break;
      }

      case AppConstants.REGISTER_SUCCESS: {
        _message = action.message;
        _errors = {};
        _success = true;
        this.emitChange();
        break;
      }

      case AppConstants.LOGIN_FAIL:
      case AppConstants.REGISTER_FAIL: {
        _message = '';
        _errors = action.errors;
        _success = false;
        this.emitChange();
        break;
      }

      default: {
          console.log('No such handler in UserStore');
      }
    }
  }

  isSuccessful() {
    return _success;
  }

  getErrors() {
    return _errors ? _errors : {};
  }

  getMessage() {
    return _message;
  }

  getUserName() {
    return _user;
  }

  clearLoginData() {
    _user = '';
    _message = '';
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

export default new UserStore();

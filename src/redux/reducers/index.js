import { combineReducers } from 'redux';
import usersReducer from './users';
import { ADD_ARTICLE } from "../constants/action-types";

const rootTnitialState = { flag: false };

const rootReducerUpdate = (state = rootTnitialState, action) => {
    switch (action.type) {
        case 'UPDATE_ROOT':
            return { ...state, ...action.payload }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    usersReducer: usersReducer,
    root: rootReducerUpdate
});

export default rootReducer;
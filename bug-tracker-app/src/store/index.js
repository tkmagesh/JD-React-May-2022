import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projectsReducer';

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
});

/* 
function loggerMiddleware(store){
    return function(next){
        return function(action){ // this will be invoked everytime an action is dispatached from anywhere in the application
            console.log(action);
            next(action);
        }
    }
} 
*/

/* 
const loggerMiddleware = store => next => action => {
    console.group(action.type)
    console.log('Before', store.getState());
    console.log('Action', action)
    next(action);
    console.log('After', store.getState());
    console.groupEnd();
};

const asyncMiddleware = ({dispatch, getState}) => next => action => {
    if (typeof action === 'function'){
        return action(dispatch, getState);
    }
    return next(action);
} 
*/

const promiseMiddleware = ({dispatch, getState}) => next =>  action => {
    if (action instanceof Promise){
        action
            .then(actionObj => {
                console.log(actionObj);
                dispatch(actionObj)
            })
        return;
    }
    return next(action)
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, promiseMiddleware, thunk)));

export default store;

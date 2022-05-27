import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

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

const loggerMiddleware = store => next => action => {
    console.group(action.type)
    console.log('Before', store.getState());
    console.log('Action', action)
    next(action);
    console.log('After', store.getState());
    console.groupEnd();
};


const store = createStore(rootReducer, applyMiddleware(logger));

export default store;

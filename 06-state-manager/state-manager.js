var StateManager = (function(){
    let _currentState = undefined,
        _subscribers = [],
        _reducer = undefined,
        _init_action = {
            type : '@@INIT_ACTION'
        };

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        _subscribers.push(callback);
    }

    //private
    function triggerChange(){
        _subscribers.forEach(callback => callback());
    }

    function dispatch(action){
        const newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        triggerChange()
    }

    function createStore(reducer){
        if (typeof reducer !== 'function')
            throw new Error('Reducer is mandatory to create a store');

        _reducer = reducer;
        //to initialize the store state with a valid default state
        _currentState = _reducer(undefined, _init_action)
        return { getState, subscribe, dispatch}
    }

    function bindActionCreators(actionCreators, dispatch){
        const actionDispatchers = {};
        for (let key in actionCreators){
            actionDispatchers[key] = function(...args){
                const action = actionCreators[key](...args);
                dispatch(action);
            }
        }
        return actionDispatchers;
    }

    return { createStore, bindActionCreators }
})()
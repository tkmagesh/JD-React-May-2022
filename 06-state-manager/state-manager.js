var StateManager = (function(){
    let _currentState = undefined,
        _subscribers = [],
        _reducer = undefined;

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
        return { getState, subscribe, dispatch}
    }

    return { createStore }
})()
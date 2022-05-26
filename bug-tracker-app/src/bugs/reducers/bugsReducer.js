function bugsReducer(currentState = [], action){
    switch (action.type){
        case 'BUGS_ADD':
            return [...currentState, action.payload];
        case 'BUGS_UPDATE':
            return currentState.map(bug => bug.id === action.payload.id ? action.payload : bug);
        case 'BUGS_REMOVE':
            return currentState.filter(bug => bug.id !== action.payload.id);
        case 'BUGS_INIT':
            return action.payload;
        case 'BUGS_REMOVE_MANY':
            const bugsToRemove = action.payload;
            return currentState.filter(bug => !bugsToRemove.find(bt => bt.id == bug.id))
        default :
            return currentState
    }
}

export default bugsReducer;
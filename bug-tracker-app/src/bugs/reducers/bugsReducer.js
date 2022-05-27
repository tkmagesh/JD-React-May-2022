const initialState = {
    sort : '',
    list : []
};

function bugsReducer(currentState = initialState, action){
    switch (action.type){
        case 'BUGS_ADD':
            return { ...currentState , list : [...currentState.list, action.payload]};
        case 'BUGS_UPDATE':
            return { ...currentState , list : currentState.list.map(bug => bug.id === action.payload.id ? action.payload : bug)};
        case 'BUGS_REMOVE':
            return { ...currentState , list : currentState.list.filter(bug => bug.id !== action.payload.id)};
        case 'BUGS_INIT':
            return { ...currentState , list : action.payload};
        case 'BUGS_REMOVE_MANY':
            const bugsToRemove = action.payload;
            return { ...currentState , list : currentState.list.filter(bug => !bugsToRemove.find(bt => bt.id === bug.id))}
        case 'BUGS_SORT':
            return {...currentState, sort : action.payload};
        default :
            return currentState
    }
}

export default bugsReducer;
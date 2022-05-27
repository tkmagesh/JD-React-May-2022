function projectsReducer(currentState = [], action){
    switch (action.type) {
        case 'PROJECTS_ADD':
            return [...currentState, action.payload];
        default:
            return currentState;
    }
}
export default projectsReducer;
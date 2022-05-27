const initialProjects = [
    {id : 1, name : 'Bug Tracker'},
    {id : 2, name : 'Expense Manager'},
    {id : 3, name : 'Time Tracker'}
]
function projectsReducer(currentState = initialProjects, action){
    switch (action.type) {
        case 'PROJECTS_ADD':
            return [...currentState, action.payload];
        default:
            return currentState;
    }
}
export default projectsReducer;
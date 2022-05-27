import { save } from '../services/bugApi'


export function addNew(bugName, projectId){
    /* return function(dispatch){
        const newBugData = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date(),
            projectId : projectId
        };
        save(newBugData)
            .then(newBug => {
                const action = { type : 'BUGS_ADD', payload : newBug };
                dispatch(action);
            })
        
    } */
    return async function(dispatch){
        const newBugData = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date(),
            projectId : projectId
        };
        const newBug = await save(newBugData)
        const action = { type : 'BUGS_ADD', payload : newBug };
        dispatch(action);
    }
};
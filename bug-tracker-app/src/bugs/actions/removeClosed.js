import * as bugApi from '../services/bugApi';

export  function removeClosed(){
    return async function(dispatch, getState){
        const storeState = getState(),
            bugs = storeState.bugsState;
        const bugsToRemove = bugs.filter( bug => bug.isClosed)
        /* 
        bugsToRemove.forEach(async bugToRemove => {
            await bugApi.remove(bugToRemove);
            const action = { type: 'BUGS_REMOVE', payload: bugToRemove };
            dispatch(action);
        }) 
        */
        const removeBugsPromise = bugsToRemove.map(async bugToRemove => {
            await bugApi.remove(bugToRemove);
            return bugToRemove
        });
        await Promise.all(removeBugsPromise)
        const action = { type : 'BUGS_REMOVE_MANY', payload : bugsToRemove};
        dispatch(action);
    }
    
    /* 
    const bugsToRemove = bugs.filter(bug => bug.isClosed);
    const action = { type: 'BUGS_REMOVE_MANY', payload: bugsToRemove };
    return action;  
    */
}
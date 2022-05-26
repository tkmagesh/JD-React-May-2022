export  function removeClosed(bugs /* TO BE FIXED */){
    
    const bugsToRetain = bugs.filter( bug => !bug.isClosed)
    const action = { type: 'BUGS_INIT', payload: bugsToRetain };
    return action; 
    
    /* 
    const bugsToRemove = bugs.filter(bug => bug.isClosed);
    const action = { type: 'BUGS_REMOVE_MANY', payload: bugsToRemove };
    return action;  
    */
}
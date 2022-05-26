//TO BE FIXED
let _currentBugId = 0;

export function addNew(bugName){
    const newBug = {
        id : ++_currentBugId,
        name : bugName,
        isClosed : false,
        createdAt : new Date()
    };
    console.log(newBug);
    const action = { type : 'BUGS_ADD', payload : newBug };
    return action;
};
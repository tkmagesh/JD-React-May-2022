import * as bugApi from '../services/bugApi';

export function toggle(bugToToggle){
    return async function(dispatch){
        const toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
        const toggledBug = await bugApi.save(toggledBugData);
        const action = { type: 'BUGS_UPDATE', payload: toggledBug };
        dispatch(action);
    }
}
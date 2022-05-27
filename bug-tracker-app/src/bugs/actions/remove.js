import * as bugApi from '../services/bugApi';

export function remove(bugToRemove){
    return async function(dispatch){
        await bugApi.remove(bugToRemove);
        const action = { type: 'BUGS_REMOVE', payload: bugToRemove };
        dispatch(action);
    }
}
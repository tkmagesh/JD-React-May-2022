import { getAll } from '../services/bugApi';

export function load(){
    return function(dispatch){
        getAll()
            .then(bugs => {
                const action = { type : 'BUGS_INIT', payload : bugs};
                dispatch(action);
            })
    }
}
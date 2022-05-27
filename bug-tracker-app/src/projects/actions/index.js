import axios from 'axios';

let _currentProjectId = 0;

export function addNew(projectName){
    const newProject = { id : ++_currentProjectId, name : projectName };
    return { type : 'PROJECTS_ADD', payload : newProject}
}

//async actions
export function load(){
    return function(dispatch){
        axios.get('http://localhost:3030/projects')
            .then(response => response.data)
            .then(projects => {
                const action = { type : 'PROJECTS_INIT', payload : projects };
                dispatch(action);
            });
    }
}

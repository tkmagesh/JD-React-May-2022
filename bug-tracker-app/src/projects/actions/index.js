import axios from 'axios';

let _currentProjectId = 0;

export function addNew(projectName){
    const newProject = { id : ++_currentProjectId, name : projectName };
    return { type : 'PROJECTS_ADD', payload : newProject}
}

export function load(){

    axios.get('http://localhost:3030/projects')
            .then(response => response.data)
            .then(projects => console.table(projects))

    const projectsFromMemory = [
        { id : 1, name : 'Bug Tracker (Memory)'},
        { id : 2, name : 'Expense Manager (Memory)'},
    ]
    const action = { type : 'PROJECTS_INIT', payload : projectsFromMemory };
    return action;
}

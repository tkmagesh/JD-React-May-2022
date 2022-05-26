let _currentProjectId = 0;

export function addNew(projectName){
    const newProject = { id : ++_currentProjectId, name : projectName };
    return { type : 'PROJECTS_ADD', payload : newProject}
}



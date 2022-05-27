import { useSelector } from 'react-redux';

/* 
export function useBugsSelector(){
    return useSelector(({bugsState : bugs, projectsState : projects}) => {
        return {
            bugs : bugs.map(bug => ({...bug, projectName : projects.find(project => project.id === bug.projectId).name})),
            projects : projects,
            closedCount : bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
        };
    });
} 
*/

export const useBugsSelector = () => useSelector(({bugsState, projectsState}) => {
    const sortAttr = bugsState.sort;
    const bugsWithProjects = bugsState.list.map(bug => ({...bug, projectName : projectsState.find(project => project.id === bug.projectId).name}));
    bugsWithProjects.sort((b1, b2) => {
        if (b1[sortAttr] > b2[sortAttr]) return 1
        if (b1[sortAttr] < b2[sortAttr]) return -1
        return 0
    })
    return {
        bugs : bugsWithProjects,
        projects : projectsState,
        closedCount : bugsState.list.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
    }
})

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

export const useBugsSelector = () => useSelector(({bugsState, projectsState}) => ({
    bugs : bugsState.map(bug => ({...bug, projectName : projectsState.find(project => project.id === bug.projectId).name})),
    projects : projectsState,
    closedCount : bugsState.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
}));

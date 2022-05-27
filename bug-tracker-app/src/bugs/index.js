import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import BugStats from './components/BugStats';
import BugEdit from './components/BugEdit';
import BugSort from './components/BugSort';
import BugList from './components/BugList';

import * as bugActionCreators from './actions';
import { useBugsSelector } from './useBugsSelector';
const Bugs = () => {
    const dispatch = useDispatch();
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    const { addNew, toggle, remove, removeClosed, load } = bugActionDispatchers;

    //Data preparation for the presenation
    /* 
    const { bugs, projects } = useSelector(storeState => {
        return {
            bugs : storeState.bugsState,
            projects : storeState.projectsState
        };
    }); 
    */

    /* 
    const { bugs, projects, closedCount } = useSelector(storeState => {
        return {
            bugs : storeState.bugsState.map(bug => ({...bug, projectName : storeState.projectsState.find(project => project.id === bug.projectId).name})),
            projects : storeState.projectsState,
            closedCount : storeState.bugsState.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
        };
    }); 
    */

    
    const { bugs, projects, closedCount } = useBugsSelector();
    return (
            <div>
            <h3>Bugs</h3>
            <button onClick={load}>Load Bugs</button>
            <div>
                <label>Filter Bugs By Project :</label>
                <input type="checkbox" />
            </div>
            {/* Dumb / Presentation components */}
            <BugStats bugsCount={bugs.length} closedCount={closedCount} />
            <BugEdit addNew={addNew} projects={projects} />
            <BugSort/>
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </div>
    )
}
export default Bugs;
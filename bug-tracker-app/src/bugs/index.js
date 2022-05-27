import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import BugStats from './components/BugStats';
import BugEdit from './components/BugEdit';
import BugSort from './components/BugSort';
import BugList from './components/BugList';

import * as bugActionCreators from './actions';

const Bugs = () => {
    const dispatch = useDispatch();
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    const { addNew, toggle, remove, removeClosed } = bugActionDispatchers;

    const bugs = useSelector(storeState => storeState.bugsState);

    return (
            <div>
            <h3>Bugs</h3>
            {/* Dumb / Presentation components */}
            <BugStats bugs={bugs} />
            <BugEdit addNew={addNew} />
            <BugSort/>
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </div>
    )
}
export default Bugs;
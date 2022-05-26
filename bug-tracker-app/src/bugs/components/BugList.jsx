import BugItem from './BugItem';

const BugList = ({bugs, toggle, remove, removeClosed}) => {
        const bugItems = bugs.map(bug => (
        <BugItem {...{bug, toggle, remove, removeClosed}} key={bug.id}/> 
        ));
    return (
            <section className="list">
            <ol>
                {bugItems}
            </ol>
            <button onClick={() => removeClosed(bugs)}>Remove Closed</button>
        </section>
    )
}
export default BugList;
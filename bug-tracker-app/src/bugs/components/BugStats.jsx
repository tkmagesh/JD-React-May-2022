const BugStats = ({bugsCount, closedCount}) => {
    return (
            <section className="stats">
            <span className="closed">{closedCount}</span>
            <span> / </span>
            <span>{bugsCount}</span>
        </section>
    )
};

export default BugStats;
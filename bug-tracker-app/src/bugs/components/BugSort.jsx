
const BugSort = ({sort}) => {
    
    return (
        <section className="sort">
            <label htmlFor="">Order By :</label>
            <select onChange={evt => sort(evt.target.value)}>
                <option value="id">Id</option>
                <option value="name">Name</option>
                <option value="isClosed">Status</option>
                <option value="createdAt">Created</option>
            </select>
            <label htmlFor="">Descending ? :</label>
            <input type="checkbox" name="" id="" />
        </section>
    )
};
export default BugSort;
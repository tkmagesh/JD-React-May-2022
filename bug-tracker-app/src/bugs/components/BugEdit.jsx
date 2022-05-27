import { useState } from 'react';

const BugEdit = ({addNew}) => {
    const [newBugName, setNewBugName] = useState('');
    return (
        <section className="edit">
            <label htmlFor="">Bug Name :</label>
            <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
            <label htmlFor="">Project :</label>
            <select name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
            <button onClick={() => addNew(newBugName)}>Add Bug</button>
        </section>
    )
}

export default BugEdit;
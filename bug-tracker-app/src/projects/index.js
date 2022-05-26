import React from 'react';

const Projects = ({projects, addNew}) => {
    const [newProjectName, setNewProjectName] = React.useState('');
    return (
        <div>
            <h3>Projects</h3>
            <label htmlFor="">Project Name :</label>
            <input type="text" onChange={ evt => setNewProjectName(evt.target.value) }/>
            <button onClick={() => addNew(newProjectName)}>Add New</button>
            <ol>
                {projects.map(project => (<li key={project.id}>{project.name}</li>))}
            </ol>
        </div>
    );
}
export default Projects;

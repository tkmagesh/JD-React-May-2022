import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import * as projectActionCreators from './actions';

const Projects = () => {
    const { addNew } = bindActionCreators(projectActionCreators, useDispatch()) 
    const projects = useSelector(storeState => storeState.projectsState);  
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

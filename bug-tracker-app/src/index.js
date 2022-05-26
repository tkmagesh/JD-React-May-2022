import React from 'react';
import ReactDOM from 'react-dom/client';
import { bindActionCreators } from 'redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as bugActionCreators from './bugs/actions';
import * as projectActionCreators from './projects/actions';
import store from './store';
import Bugs from './bugs';
import Projects from './projects';

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);
const projectActionDispatchers = bindActionCreators(projectActionCreators, store.dispatch);

const root = ReactDOM.createRoot(document.getElementById('root'));
function renderApp(){
    const storeState = store.getState(),
        bugs = storeState.bugsState,
        projects = storeState.projectsState;

    root.render(
      <React.StrictMode>
         <div>
            <Projects projects={projects} {...projectActionDispatchers} />
            <Bugs bugs={bugs} {...bugActionDispatchers} />
        </div>
      </React.StrictMode>
    );
}
renderApp();
store.subscribe(renderApp);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



//ES6 Modules
/* 
import * as calc from './calculator';
console.log(calc);
console.log(calc.add(100,200))
*/

/* 
import * as calc from './calculator'
const add = calc.add;
console.log(add(100,200)) 
*/

/* 
import * as calc from './calculator'
const { add } = calc;
console.log(add(1000,200))  
*/

/* 
import { add } from './calculator'
console.log(add(1000,2000))   
*/

//importing a default exported entity
/* 
import utils from './calculator';
console.log(utils); 
*/

/* 
import utils, {add, subtract} from './calculator'
console.log(utils, add, subtract) 
*/
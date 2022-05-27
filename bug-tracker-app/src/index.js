import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store';
import Bugs from './bugs';
import Projects from './projects';
import Home from './home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
      {/* <Router>
      <div>
          <div>
            <span>
              [ <Link to="/">Home</Link> ]
            </span>
            <span>
              [ <Link to="/projects">Projects</Link> ]
            </span>
            <span>
              [ <Link to="/bugs">Bugs</Link> ]
            </span>
          
        </div>
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/bugs">
            <Bugs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router> */}
      <Projects/>
      <Bugs/>
      
    </Provider>
  </React.StrictMode>
);




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
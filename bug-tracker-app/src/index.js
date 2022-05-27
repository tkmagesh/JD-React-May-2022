import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store';
import Bugs from './bugs';
import Projects from './projects';
import axios from 'axios';
window['axios'] = axios;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
      <div>
        <Projects  />
        <Bugs  />
    </div>
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
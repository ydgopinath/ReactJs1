import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import Day1 from './1/day-1';
//import Day2 from './2/Day-2';
//import Day3 from './3/Day-3';
// import Day4 from './4/Day-4';
//import Day5 from './5/Day-5';
//import Day6 from './6/Day6';
// import Day7 from './7/Day7';
import App from './Routing/App';
import Home from './Routing/Home';
import About from './Routing/About';
import Contact from './Routing/Contact';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to='/'>App</Link>
                </li>
                <li>
                    <Link to='/Home'>Home</Link>
                </li>
                <li>
                    <Link to='/About'>About</Link>
                </li>
                <li>
                    <Link to='/Contact'>Contact</Link>
                </li>
            </ul>
            <Route exact path='/' component={App} />
            <Route path='/About' component={About} />
            <Route path='/Home' component={Home} />
            <Route path='/Contact' component={Contact} />

        </div >
    </Router >
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

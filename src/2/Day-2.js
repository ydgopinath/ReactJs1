import React from 'react';
import ReactDOM from 'react-dom';

// class Day2 extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Welcome to Day2 Training</h1>
//             </div>
//         )
//     }
// }

/*
--Functional or StateLess Components because it doesn't contain their own state
class Day2 extends React.Component {  
    render() {  
       return (  
          <div>  
             <First/>  
             <Second/>  
          </div>  
       );  
    }  
 }  
 class First extends React.Component {  
    render() {  
       return (  
          <div>  
             <h1>Gopinath</h1>  
          </div>  
       );  
    }  
 }  
 class Second extends React.Component {  
    render() {  
       return (  
          <div>  
             <h2>www.reactjs.org</h2>  
             <p>This websites contains the great CS tutorial.</p>  
          </div>  
       );  
    }  
 }  
 */

 /*
 --Class or StateFull Components because it  contain their own state
class Day2 extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                { "name": "Gopinath" }, { "name": "Sai" }, { "name": "Guptha" }
            ]
        }
    }
    render() {
        return (
            <div>
                <StudentName />
                <ul>
                    {this.state.data.map(o => <List data={o} />)}
                </ul>
            </div>
        )
    }

}
class StudentName extends React.Component {
    render() {
        return (
            <div>
                <h1>Student Details</h1>
            </div>
        )
    }
}
class List extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    {this.props.data.name}
                </li>
            </ul>
        );
    }
}
*/
export default Day2;
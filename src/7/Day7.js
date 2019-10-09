import React from 'react';
import ReactDOM from 'react-dom';

class Day7 extends React.Component
{
 constructor(props)
 {
     super(props);
     this.callRef=React.createRef();
     this.addingRefInput=this.addingRefInput.bind(this);
 }
 addingRefInput()
 {
     this.callRef.current.focus();
 }
 render()
 {
     return(
         <div>
             <input type='text' ref={this.callRef}/>
             <input type='submit' value='click' onClick={this.addingRefInput}/>
         </div>
     );
 }
}
export default Day7;

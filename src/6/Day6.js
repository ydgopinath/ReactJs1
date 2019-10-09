import React from 'react';
import ReactDOM from 'react-dom';

class Day6 extends React.Component {
    constructor(props) {
        super(props);
       // this.state = { value: '' };
      //  this.handleChange = this.handleChange.bind(this);
       // this.handleSubmit = this.handleSubmit.bind(this);

       this.state={
           isGoing:true,
           numberOfGuests:2
       }
       this.handleInputChange=this.handleInputChange.bind(this);

    }
    /*
    handleChange(e) {
        this.setState({ value: e.target.value.toUpperCase() });
    }
    handleSubmit(e) {
        alert('A name was submitted: ' + this.state.value);
        e.preventDefault();     
    }
    render() {
        return (
            <form onClick={this.handleSubmit}>
                <h1>Controlled Component Example</h1>
                <label>Name: <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
    */

    handleInputChange(e)
    {
        const target=e.target;
        const value=target.type==='checkbox'?target.checked:target.value;
        const name=target.name;

        this.setState({
            [name]:value
        });
    }

    render()
    {
        return(
            <form>
                <label>Is Going: 
                    <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange}/>
                </label><br/>
                <label>Number of Guests:
                    <input type="textbox" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleInputChange}/>
                </label>
            </form>
        )
    }

}

export default Day6;

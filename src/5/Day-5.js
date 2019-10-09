import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Day5 extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: 0
        }
        this.setNewNumber=this.setNewNumber.bind(this);
    }
    setNewNumber() {
        this.setState({ data: this.state.data + 1 });
    }
    render() {
        return (
            <div>
                <button onClick={this.setNewNumber}>Increment</button>
                <Content myNumber={this.state.data} />
            </div>
        )
    }
}

class Content extends React.Component {
    componentWillMount() {
        console.log('Component Will Mount');
    }

    componentDidMount() {
        console.log('Component Did Mount');
    }

    componentWillReceiveProps() {
        console.log('Component Will Receive Props');
    }

    shouldComponentUpdate() {
        return true;
    }
    componentWillUpdate() {
        console.log('Component will Update');
    }
    componentDidUpdate() {
        console.log('Component Did Update');
    }
    componentWillUnmount() {
        console.log('Component Will Unmount');
    }
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        )
    }
}

export default Day5;
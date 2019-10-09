import React from 'react';
import ReactDOM from 'react-dom';

class Day3 extends React.Component {
    constructor() {
        super();
        this.state = { display: false }
        this.toggle=this.toggle.bind(this);
    }
    toggle()
    {
        this.setState({display:!this.state.display})
    }
    render() {
        return (
            <div>
                <h1>React Training</h1>
                {this.state.display ?
                    (
                        <div>
                            Welcome to React
                            <button onClick={this.toggle}>Hide</button>
                        </div>
                        
                    ) :
                    (
                        <button onClick={this.toggle}>Show</button>
                    )
                    }
            </div>
        )
    }

}
export default Day3;
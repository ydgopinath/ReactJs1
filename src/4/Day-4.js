import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
class Day4 extends React.Component {
    render() {
        return (
            <div>
                <h2>Array:{this.props.propArray}</h2>
                <h2>Bool:{this.props.propBool ? 'True' : 'False'}</h2>
                <h2>Func:{this.props.propFunc(3)}</h2>
                <h2>Number:{this.props.propNumber}</h2>
                <h2>Object:{this.props.propObject.Name}</h2>            
            </div>
        );
    }
}

Day4.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    propObject: PropTypes.object
}

Day4.defaultProps = {
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function (e) { return e },
    propNumber: 1,
    propString: 'Gopinath',
    propObject: {
        Name: 'Test1',
        Password: 'Test2'
    }
}
export default Day4;
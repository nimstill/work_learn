import React, { Component } from 'react';
import { render } from 'react-dom';

class HelloMessage extends Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

render(<HelloMessage name='John' />, mountNode);


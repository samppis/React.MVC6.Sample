/// <reference path="../typings/react/react.d.ts" />
import React = require('react');

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

interface HelloWorldProps extends React.Props<any> {
    name: string;
}

class HelloMessage extends React.Component<HelloWorldProps, {}> {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

export = HelloMessage;

//ReactDOM.render(<HelloMessage name="Sampsa" />, document.getElementById('content'));
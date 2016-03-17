/// <reference path="../../../typings/main/ambient/react/index.d.ts" />
var React = require('react');
class HelloMessage extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}
module.exports = HelloMessage;

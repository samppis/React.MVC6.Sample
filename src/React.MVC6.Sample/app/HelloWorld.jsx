var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../typings/react/react.d.ts" />
var React = require('react');
var HelloMessage = (function (_super) {
    __extends(HelloMessage, _super);
    function HelloMessage() {
        _super.apply(this, arguments);
    }
    HelloMessage.prototype.render = function () {
        return <div>Hello {this.props.name}</div>;
    };
    return HelloMessage;
})(React.Component);
module.exports = HelloMessage;
//ReactDOM.render(<HelloMessage name="Sampsa" />, document.getElementById('content')); 

"use strict";
const React = require('react');
const ReactNative = require('react-native');
const { Text } = ReactNative;
class Greeting extends React.Component {
    render() {
        return (React.createElement(Text, null, 
            "Hello ", 
            this.props.name));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Greeting;

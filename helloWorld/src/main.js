"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const Greet_1 = require('./Greet');
class Main extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, null, 
            React.createElement(Greet_1.default, {message: 'hola desde Costa Rica'}), 
            React.createElement(react_native_1.Text, null, "Component made it with TypeScript")));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Main;

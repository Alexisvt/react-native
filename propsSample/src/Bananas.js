"use strict";
const React = require('react');
const ReactNative = require('react-native');
const Greeting_1 = require('./Greeting');
const { Image, AppRegistry, View } = ReactNative;
class Bananas extends React.Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (React.createElement(View, {style: { alignItems: 'center' }}, 
            React.createElement(Image, {source: pic, style: { width: 193, height: 110 }}), 
            React.createElement(Greeting_1.default, {name: 'Alexis'}), 
            React.createElement(Greeting_1.default, {name: 'David'}), 
            React.createElement(Greeting_1.default, {name: 'Villegas'})));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Bananas;

import * as React from 'react';
import * as ReactNative from 'react-native';

const { Text } = ReactNative;

interface IGreetingProps {
  name: string;
}

export default class Greeting extends React.Component<IGreetingProps, any> {
  render() {
    return (<Text>Hello {this.props.name}</Text>);
  }
}
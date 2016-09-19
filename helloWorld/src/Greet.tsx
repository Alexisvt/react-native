import * as React from 'react';
import { View, Text } from 'react-native';

interface IGreetProps {
  message: string;
}

const Greet: React.StatelessComponent<IGreetProps> = (props) => {
  return (
      <Text>{this.props.message}</Text>
    );
};

export default Greet;

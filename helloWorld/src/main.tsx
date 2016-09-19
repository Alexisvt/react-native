import * as React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Greet from './Greet';

export default class Main extends React.Component<any, any> {

  render() {
    return (
      <View>
        <Greet message={'hola desde Costa Rica'}></Greet>
        <Text>Component made it with TypeScript</Text>
      </View>
    );
  }
}
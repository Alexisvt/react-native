import * as React from 'react';
import * as ReactNative from 'react-native';
import Greeting from './Greeting';

// Workaround - 
const { Image, AppRegistry, View} = ReactNative;

export default class Bananas extends React.Component<any, any> {

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (<View style={{alignItems: 'center'}}>
      <Image source={pic} style={{ width: 193, height: 110 }}></Image>
      <Greeting name='Alexis'></Greeting>
      <Greeting name='David'></Greeting>
      <Greeting name='Villegas'></Greeting>
    </View>);
  }
}
// @flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IRowProps {
  text: string;
}

export default class Row extends Component {

  props: IRowProps;

  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 24,
    color: '#4d4d4d'
  }
});
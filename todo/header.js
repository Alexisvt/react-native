import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

interface IHeaderProps {
  value: string;
  onAddItem: Function;
  onChange: Function;
  onToggleAllComplete: Function;
}

export default class Header extends Component {

  props: IHeaderProps;

  constructor(props: IHeaderProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={this.props.onToggleAllComplete}>
          <Text style={styles.toggleIcon}>{String.fromCharCode(10003)}</Text>
        </TouchableOpacity>
        <TextInput
          value={this.props.value}
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onAddItem}
          placeholder='What need to be done?'
          blurOnSubmit={false}
          returnKeyType='done'
          style={styles.input}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 50,
    marginLeft: 16
  },
  toggleIcon: {
    fontSize: 30,
    color: '#CCC'
  },
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
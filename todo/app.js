// @flow
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, ListView, Keyboard } from 'react-native';
import Header from './header';
import Footer from './footer';
import Row from './row';

export default class App extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      value: '',
      items: [],
      allComplete: false,
      dataSource: ds.cloneWithRows([])
    };

    this.handleAddItem = this.handleAddItem.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
    this.renderSeparator = this.renderSeparator.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.setSource = this.setSource.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
  }

  setSource(items, itemsDataSource, otherState = {}) {
    this.setState({
      items,
      dataSource: this.state.dataSource.cloneWithRows(itemsDataSource),
      ...otherState
    });
  }

  handleAddItem() {
    if (!this.state.value) {
      return;
    }

    const newItems = [
      ...this.state.items,
      {
        key: Date.now(),
        text: this.state.value,
        complete: false
      }
    ];

    this.setSource(newItems, newItems, { value: '' });

  }

  onChange(value) {
    this.setState({ value });
  }

  handleToggleAllComplete() {
    const complete = !this.state.allComplete;
    const newItems = this.state.items.map(item => ({
      ...item,
      complete
    }));

    // console.table(newItems);
    this.setSource(newItems, newItems, { allComplete: complete });

  }

  handleToggleComplete(key, complete) {

    const newItems = this.state.items.map(item => {
      
      if (item.key !== key) return item;

      return {
        ...item,
        complete
      };
    });

    this.setSource(newItems, newItems);
  }

  renderRow({key, ...value}) {
    return (
      <Row
        key={key}
        onComplete={complete => this.handleToggleComplete(key, complete)}
        {...value}
        />
    );
  }

  renderSeparator(sectionId, rowId) {
    return <View key={rowId} style={styles.separator} />;
  }

  onScroll() {
    return Keyboard.dismiss();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          value={this.state.value}
          onAddItem={this.handleAddItem}
          onChange={this.onChange}
          onToggleAllComplete={this.handleToggleAllComplete}
          />
        <View style={styles.content}>
          <ListView
            style={styles.list}
            enableEmptySections
            dataSource={this.state.dataSource}
            onScroll={this.onScroll}
            renderRow={this.renderRow}
            renderSeparator={this.renderSeparator}
            />
        </View>
        <Footer></Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    ...Platform.select({
      ios: { paddingTop: 30 }
    })
  },
  content: {
    flex: 1
  },
  list: {
    backgroundColor: '#FFF'
  },
  separator: {
    borderWidth: 1,
    borderColor: '#F5F5F5'
  }
});
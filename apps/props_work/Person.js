import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Person extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contain}>
          <Text>Name : {this.props.name}</Text>
          <Text>Age : {this.props.age}</Text>
          <Text>Number : {this.props.number}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contain: {
    backgroundColor: 'green',
  }
});

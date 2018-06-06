import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Person from './Person';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <Person name='imran' age='24' number='01754099405' />
        <Person name='sid' age='22' number='015534809069' />
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

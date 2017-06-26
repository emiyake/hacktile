import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export class Cart extends Component<any, any> {

  static navigationOptions = {
    title: 'Basket',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Basket!
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});



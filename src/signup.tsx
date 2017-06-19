import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export class SignUp extends Component<any, any> {

  static navigationOptions = {
    title: 'SignUp',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          SignUp!
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



import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { Component } from 'react';

export class Orders extends Component<any, any> {

  static navigationOptions = {
    title: 'Orders',
  };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Orders!
        </Text>
        <View style={styles.buttonContainer}>
          <Button title='Entrar' onPress={() => this.onLoginPressed()}/>
        </View>
      </View>
    );
  }

  private onLoginPressed() {
    const { navigate } = this.props.navigation;
    navigate('Login');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});



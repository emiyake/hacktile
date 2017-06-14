import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { Component } from 'react';

import { Timer } from './timer';

export default class App extends Component<any, any> {

  onLoginPressed() {
    console.log(this.state);
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Login
        </Text>

        <Text style={styles.inputLabel}>E-mail</Text>
        <TextInput
          style={styles.input}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          onChangeText={(text) => this.setState({email: text})} />

        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) => this.setState({password: text})} />

        <Button title='Entrar' onPress={() => this.onLoginPressed()}/>

        <Timer />

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
  inputLabel: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    margin: 8,
    padding: 8,
  },
});



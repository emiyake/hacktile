import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export class Settings extends Component<any, any> {

  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Settings!
        </Text>
        <Text style={styles.inputLabel}>Kept state test</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})} />
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



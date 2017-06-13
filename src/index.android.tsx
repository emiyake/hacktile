import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { Component, ComponentState } from 'react';

export default class ReactNativeBuilds extends Component< any, ComponentState> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello Android World!!!!!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.tsx
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('ReactNativeBuilds', () => ReactNativeBuilds);

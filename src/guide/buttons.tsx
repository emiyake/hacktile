import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { Button } from './../app/components/button.component';

export class Buttons extends Component<any, any> {

  static navigationOptions = {
    title: 'Buttons',
  };

  render() {
    return (
    <View style={styles.container}>
        <Button type="primary" caption="Primary" onPress={()=> this.onPress()}/>
        <Button type="secondary" caption="Secondary" onPress={()=> this.onPress()}/>
        <Button type="link" caption="Link" onPress={()=> this.onPress()}/>
      </View>
    );
  }

  onPress() {
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    padding: 10
  },
});






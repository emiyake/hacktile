import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { Component } from 'react';

export class Specialties extends Component<any, any> {

  static navigationOptions = {
    title: 'Specialties',
  };

  onCategoriesPressed() {
    const { navigate } = this.props.navigation;
    navigate('Categories');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Specialties!
        </Text>
        <Button title='Categories' onPress={() => this.onCategoriesPressed()}/>
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



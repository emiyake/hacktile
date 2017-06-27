import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { FontFamily, FontSize } from './../style/variables';

export class Typography extends Component<any, any> {

  static navigationOptions = {
    title: 'Typography',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.montserrat}>
            Montserrat Regular
        </Text>
        <Text style={styles.noto_regular}>
            Noto Serif Regular
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },
  montserrat: {
    fontSize: FontSize.font_size_large,
    margin: 10,
    fontFamily: FontFamily.font_family_primary
  },
  noto_regular: {
    fontSize: FontSize.font_size_medium,
    margin: 10,
    fontFamily: FontFamily.font_family_secondary
  }
  
});



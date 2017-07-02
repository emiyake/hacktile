import {
  Body,
  Caption,
  CaptionError,
  Dd,
  Dt,
  H1,
  H2,
  H3,
  H4,
  Label,
  ProductTitle,
} from './../app/style/title';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

export class Title extends Component<any, any> {

  static navigationOptions = {
    title: 'Title',
  };

  render() {
    return (
      <View style={styles.container}>
        <H1>H1</H1>
        <H2>H2</H2>
        <H3>H3</H3>
        <H4>H4</H4>
        <Body>Body</Body>
        <Caption>Caption</Caption>
        <CaptionError>Caption Error</CaptionError>
        <Dd>DD</Dd>
        <Dt>DT</Dt>
        <Label>Label</Label>
        <ProductTitle> Product title </ProductTitle>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    alignItems: 'center',
  },
});



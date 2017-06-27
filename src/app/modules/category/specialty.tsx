import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { Component } from 'react';

import { GraphqlClient } from '../../core';
import { SpecialtyListUseCase } from '../../domain';
import { SpecialtyResource } from '../../resource';

export class Specialty extends Component<any, any> {

  onCategoriesPressed() {
    const { navigate } = this.props.navigation;
    navigate('Category');
  }

  render() {
    let specialties = this.props.specialties ? this.props.specialties : [];
    let specialtyList = specialties.map((specialty, index) =>
      <Text key={index}>{specialty}</Text>,
    );

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Specialties!
        </Text>
        {specialtyList}
        <Button title='Categories' onPress={() => this.onCategoriesPressed()}/>
      </View>
    );
  }

}


export class SpecialtyWithData extends Component<any, any> {

  static navigationOptions = {
    title: 'Specialties',
  };

  constructor(props) {
    super(props);
    this.state = { specialties: []};
  }

  componentDidMount() {
    let graphqlClient = new GraphqlClient('https://labinhands-api-dev.herokuapp.com/');
    let specialtyResource =  new SpecialtyResource(graphqlClient);
    let useCase = new SpecialtyListUseCase(specialtyResource);
    useCase.execute().map(specialties => specialties.map(specialty => specialty.name)).subscribe(
      specialtyNames => this.setState({specialties: specialtyNames}),
      error => console.log(error),
    );
  }

  render() {
    return (
      <Specialty specialties={this.state.specialties} navigation={this.props.navigation} />
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



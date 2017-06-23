import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

export class Specialties extends Component<any, any> {

  static navigationOptions = {
    title: 'Specialties',
  };

  onCategoriesPressed() {
    const { navigate } = this.props.navigation;
    navigate('Categories');
  }

  render() {
    //Logs results from GraphQL query
    console.log(this.props.data);
    if (this.props.data && this.props.data.Categories) {
      console.log(this.props.data.Categories.nodes.map(node => node.name));
    }
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

export const SpecialtiesWithData = graphql(gql`query {
  Categories{
    nodes{
      name
    }
  }
}`, {})(Specialties);



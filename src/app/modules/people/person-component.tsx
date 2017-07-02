//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

// create a component
export class PersonComponent extends Component<any, any> {
  static navigationOptions = ({ navigation }) => ({
    title: `Detalhes de ${navigation.state.params.user.name}`,
    tabBarLabel: 'People',
  })

  constructor(props) {
    super(props);
    this.state = {
      pointsLifeLongLearner: 1,
    };
  }

  increase() {
    this.setState(previousState => {
      return { pointsLifeLongLearner: previousState.pointsLifeLongLearner + 1 };
    });
  }

  decrease() {
    this.setState(previousState => {
      return { pointsLifeLongLearner: previousState.pointsLifeLongLearner - 1 };
    });
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Image source={params.user.profilePicture} style={styles.profileImage}/>
        <Text style={styles.name}>{params.user.name}</Text>
        <View style={styles.mission}>
          <Button onPress={() => this.decrease()} title='-'/>
          <Text style={styles.missionText}>Life long learner</Text>
          <Button onPress={() => this.increase()} title='+'/>
        </View>
        <Text>{this.state.pointsLifeLongLearner}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  profileImage: {
    height: 100,
    width: 100,
    margin: 8,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
  },
  missionText: {
    fontSize: 16,
    margin: 8,
  },
  mission: {
    flexDirection: 'row',
  },
  button: {
    margin: 8,
  },
});

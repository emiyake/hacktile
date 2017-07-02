//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// create a component
export class PeopleRow extends Component<any, any> {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.onPeopleRowPress(this.props.user)}>
        <Image style={styles.profileImage} source={this.props.user.profilePicture}/>
        <View style={styles.columnContainer}>
          <Text style={styles.h3}> {this.props.user.name} </Text>
          <Text style={styles.label}> {this.props.user.area} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  profileImage: {
    margin: 16,
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  h3: {
    fontSize: 16,
    color: "#333333",
    fontWeight: 'bold',
  },
  label: {
    fontSize: 12,
    color: "#555555"
  },
  columnContainer: {
    flexDirection: "column",
    alignItems: "flex-start"
  }
});

import React, { Component } from 'react';
import { View, StyleSheet, ListView } from 'react-native';

import { PeopleRow } from './people-row';

export class PeopleList extends Component<any, any> {

  static navigationOptions = {
    title: 'People',
  };

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      users: dataSource.cloneWithRows([
        {
          name: "Yugo Miahara",
          area: "Design Sprint",
          profilePicture: {
            uri: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
          },
        },
        {
          name: "Felipe Marques (Piumhi)",
          area: "Front End",
          profilePicture: {
            uri: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
          }
        },
      ])
    };

    this.handlePeopleRowPress = this.handlePeopleRowPress.bind(this);
  }

  handlePeopleRowPress(user: any) {
    this.props.navigation.navigate('People', { user: user});
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.users}
          renderRow={(user) => <PeopleRow user={user} onPeopleRowPress={this.handlePeopleRowPress}/>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});

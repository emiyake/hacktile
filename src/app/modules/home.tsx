import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';


export class Home extends Component<any, any> {

  static navigationOptions = {
    title: 'Home',
  };

  constructor(props, context){
    super(props, context);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.onPressTypography()}
          title="Typography"
        />
        <Button
          onPress={() => this.onPressButtons()}
          title="Buttons"
        />
        <Button
          onPress={() => this.onPressTitles()}
          title="Titles"
        />
        <Button
          onPress={() => this.onPressListings()}
          title="Listings"
        />
        <Button
          onPress={() => this.onPressForms()}
          title="Forms"
        />
      </View>
    );
  }

  onPressTypography(){
    const { navigate } = this.props.navigation;
    navigate('Typography');
  }

  onPressButtons(){
    const { navigate } = this.props.navigation;
    navigate('Buttons');
  }

  onPressTitles(){
    const { navigate } = this.props.navigation;
    navigate('Title');
  }

  onPressListings(){
    const { navigate } = this.props.navigation;
    navigate('Listings');
  }

  onPressForms(){
    const { navigate } = this.props.navigation;
    navigate('Forms');
  }
  
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },
  button:{
    margin: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});



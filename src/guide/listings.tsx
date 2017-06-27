import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import { Card } from './../components/card.component';
import { SimpleCellComponent } from './../components/simple_cell.component';
import { VisualAidComponent } from './../components/visual_aid.component';
import { VideoPlayerCellComponent } from './../components/video_player_cell.component';

export class Listings extends Component<any, any> {

  static navigationOptions = {
    title: 'Listings',
  };

  render() {
    return (
    <ScrollView>
    <View style={styles.container}>
        <Card brand="Sanofi" productName="Amplicitil 5mg Sol Inj Cx 5 Amp X 5ml" style={styles.cardContainer}></Card>
        <Card brand="Sanofi" showQuantity={true} productName="Amplicitil 5mg Sol Inj Cx 5 Amp X 5ml" style={styles.cardContainer}></Card>
        <SimpleCellComponent style={styles.cardContainer}/>
        <VisualAidComponent style={styles.cardContainer}/>
        <VideoPlayerCellComponent />
      </View>
      </ScrollView>
    );
  }

  onPress(){
    alert('kakkaka');
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    padding: 10
  },
  cardContainer:{
      marginBottom: 16,
  }
  
});






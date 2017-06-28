import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { PickerComponent } from './../components/picker.component';
import { TextInputComponent } from './../components/text_input.component';

export class Forms extends Component<any, any> {

  static navigationOptions = {
    title: 'Forms',
  };

  state = {language: ''}

  
  data: any = [];
      
  constructor(props) {
    super(props);
    
    for(var i=0;i<10;i++){
        this.data.push('kkkk'+ i);
    }
  }

  render() {
      
    return (
    <View style={styles.container}>
        <TextInputComponent title='Nome'/>
        <TextInputComponent isError={true} errorMessage='Campo obrigatório' title='Nome'/>
        <PickerComponent title='Escolher' data={this.data} onPickerConfirm={this.onPickerConfirm}/>
        <PickerComponent isError={true} errorMessage='Campo obrigatório' title='Estado do CRM' data={this.data} onPickerConfirm={this.onPickerConfirm}/>
      
      </View>
    );
  }

  onPickerConfirm(){

  }

}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,

  },
  
});






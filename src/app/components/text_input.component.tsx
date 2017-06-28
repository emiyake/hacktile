import React, { Component } from 'React';
import { CaptionError, Label } from './../style/title';
import { colors } from './../style/variables';
import { Platform, TextInput, View } from 'react-native';
import { styles } from './text_input.component.style';

export class TextInputComponent extends Component<any,any> {
  props: {
    style?: any;
    title?: string;
    isError?: boolean;
    errorMessage?: string;
  };


  render() {
    let textInputStyle;
    if(Platform.OS === 'ios'){
        textInputStyle = styles.inputTextiOS;
    }
    let isErrorMessage;
    let isErrorStyle;
    let underLineColor = colors.color_lightest_gray;
    
    if(this.props.isError){
        isErrorStyle = styles.inputError;
        isErrorMessage = <CaptionError>{this.props.errorMessage}</CaptionError>
        underLineColor = colors.color_red
    }
    
    return (
        <View style={[this.props.style, styles.container]}>
            <Label>{this.props.title}</Label>
            <TextInput underlineColorAndroid={underLineColor} style={[styles.inputText, textInputStyle, isErrorStyle]}  />
            {isErrorMessage}
        </View>
    );
  }
}
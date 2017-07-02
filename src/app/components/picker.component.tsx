import { CaptionError, Label } from './../style/title';
import {
  Image,
  Picker as PickerNative,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { Component } from 'React';

import Picker from 'react-native-picker';
import { colors } from './../style/variables';
import { styles } from './picker.component.style';

export class PickerComponent extends Component<any,any> {
  props: {
    style?: any;
    data?: any;
    title?: string;
    onPickerConfirm?:(index:number) => void;
    isError?: boolean;
    errorMessage?: string;
  };

  constructor(props) {
    super(props);
    this.state = {
        pickerText:'',
        selectedIndex:0,
    }
  }

  picker: any;

  render() {

    if(Platform.OS === 'android'){
        let itens = this.props.data.map((item, index) => {
             return (<PickerNative.Item label={item} value={index} key={index}/>) 
                            });
        this.picker =  <PickerNative
                        style={styles.pickerContainer}
                        onValueChange={(itemIndex) => this.onPickerSelected(itemIndex)}
                        selectedValue={this.state.selectedIndex}
                        >
            {itens}
            </PickerNative>;
      }else{
          this.picker = <TouchableOpacity
            accessibilityTraits='button'
            activeOpacity={0.6}
            onPress={()=> this.onPress(this.props.data)}
            style={styles.pickerContainer}>
        <View style={styles.pickeriOS}>
            <Text>
                {this.state.pickerText}
                </Text>
            <Image source={require('./../assets/ic_chevron_down.png')}/>
        </View>
        </TouchableOpacity>
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
            <View style={styles.container}>
                <Label>{this.props.title}</Label>
                {this.picker}
                {isErrorMessage}
            </View>
  )}

  onPickerSelected(index:number){
      this.setState({selectedIndex:index});
      this.props.onPickerConfirm(index);
      this.setState({pickerText:this.props.data[index]});
  }

  onPress(items:any){
    this.picker = Picker.init({
                    pickerData: items,
                    onPickerConfirm: data => {
                        this.onPickerSelected(items.indexOf(String(data)));
                    },
                    onPickerCancel: data => {
                        console.log(data);
                    },
                    onPickerSelect: data => {
                        console.log(data);
                    },
                    pickerCancelBtnText: 'Cancelar',
                    pickerConfirmBtnText: 'Confirmar',
                    pickerTitleText: this.props.title
                });
  }
}

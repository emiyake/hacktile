import {
  Image,
  TouchableOpacity,
} from 'react-native';
import React,  {Component} from 'React';
import {styles} from './simple_cell.component.style';
import {H4} from './../style/title';

export class SimpleCellComponent extends Component<any,any> {
  props: {
    style?: any;
  };

  render() {

    return (
        <TouchableOpacity
            accessibilityTraits="button"
            activeOpacity={0.6}
            style={[styles.container, this.props.style]}>
            <H4>
                Antibióticos
            </H4>
            <Image source={require('./../assets/ic_chevron.png')}/>
        </TouchableOpacity>
    );
  }
}
import React, { Component } from 'React';
import { styles } from './visual_aid.component.sytle';
import {
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

export class VisualAidComponent extends Component<any,any> {
  props: {
    style?: any;
  };


  render() {

    return (
        <TouchableOpacity
            accessibilityTraits="button"
            activeOpacity={0.8}
            style={[styles.container, this.props.style]}>
            <Image source={require('./../assets/ic_visual_aid.png')}/>
            <Text style={styles.text}>
                VISUAL AID
            </Text>
        </TouchableOpacity>
    );
  }
}
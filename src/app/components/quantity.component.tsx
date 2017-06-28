import React, { Component } from 'React';
import { styles } from './quantity.component.style';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export class QuantityComponent extends Component<any,any> {
  props: {
    style?: any;
  };


  render() {

    return (
        <View style={[this.props.style, styles.container]}>
          <TouchableOpacity
            accessibilityTraits="button"
            activeOpacity={0.4}
            style={styles.imageContainer}>
              <Image source={require('./../assets/ic_minus.png')}/>
            </TouchableOpacity>
            <Text style={styles.textContainer}>
                1
            </Text>
            <TouchableOpacity
            accessibilityTraits="button"
            activeOpacity={0.4}
            style={styles.imageContainer}>
              <Image source={require('./../assets/ic_plus.png')}/>
            </TouchableOpacity>

        </View>
    );
  }
}

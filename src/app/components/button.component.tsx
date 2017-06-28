import React, { Component } from 'React';
import { styles } from './button.component.style';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';


export class Button extends Component<any,any> {
  props: {
    type: 'primary' | 'secondary' | 'link';
    icon?: number;
    caption: string;
    style?: any;
    onPress: () => any;
  };

  static defaultProps = {
    type: 'primary',
  };

  render() {
    const caption = this.props.caption.toUpperCase();
    let icon;
    if (this.props.icon) {
      icon = <Image source={this.props.icon} style={styles.icon} />;
    }
    
    let props = {
      primary: { 
        buttonStyle: styles.primaryButton,
        captionStyle: styles.primaryCaption,
      },
      secondary: { 
        buttonStyle: styles.secondaryButton,
        captionStyle: styles.secondaryCaption,
      },
      link: { 
        buttonStyle: null,
        captionStyle: styles.secondaryCaption,
      }
    };
    let prop = this.props.type;

    let content = (
    <View style={[styles.button, props[prop].buttonStyle]}>
      {icon}
      <Text style={[styles.caption,  props[prop].captionStyle]}>
        {caption}
      </Text>
    </View>
    );

    return (
      <TouchableOpacity
        accessibilityTraits="button"
        onPress={this.props.onPress}
        activeOpacity={0.8}
        style={[styles.container, this.props.style]}>
        {content}
      </TouchableOpacity>
    );
  }
}





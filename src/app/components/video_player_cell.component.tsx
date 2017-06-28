import React, { Component } from 'React';
import { styles } from './video_player_cell.component.style';
import {
  Image,
  TouchableOpacity,
} from 'react-native';

export class VideoPlayerCellComponent extends Component<any,any> {
  props: {
    style?: any;
  };

  render() {

    return (
        <TouchableOpacity
            accessibilityTraits="button"
            activeOpacity={0.8}
            style={[styles.container, this.props.style]}>
            <Image source={require('./../assets/img_product.png')} style={styles.productImagePlaceholder}>
            <Image source={require('./../assets/ic_video_play_mask.png')}/>
            </Image>
        </TouchableOpacity>
    );
  }
}
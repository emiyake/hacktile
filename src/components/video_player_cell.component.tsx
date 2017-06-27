import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React,  {Component} from 'React';
import {styles} from './video_player_cell.component.style';

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
            <Image source={require('./../assets/img_product.png')} style={{width: '100%', height:'100%', borderRadius: 5}}>
            <Image source={require('./../assets/ic_video_play_mask.png')}/>
            </Image>
        </TouchableOpacity>
    );
  }
}
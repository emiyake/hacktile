import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import React,  {Component} from 'React';
import {Label, H3} from './../style/title';
import {styles} from './card.component.style';
import {QuantityComponent} from './quantity.component';

export class Card extends Component<any,any> {
  props: {
    brand?: any,
    productName?: any,
    style?: any;
    showQuantity?: boolean;
  };
  static defaultProps = {
    showQuantity: false
  };


  render() {
    var quantity;
    var container;
    if(this.props.showQuantity){
        quantity = <QuantityComponent style={styles.quantityContainer}/>;
        container = styles.showQuantityContainer;
    }
    return (
        <TouchableOpacity
            accessibilityTraits="button"
            activeOpacity={0.6}
            style={[styles.container, this.props.style]}>
            <View style={styles.imageContainer}>
                <Image source={require('./../assets/img_product.png')}/>
            </View>
            <View style={styles.textContainer}>
                <View style={styles.labelContainer}>
                    <Label>{this.props.brand}</Label>
                </View>
                <View style={styles.productTextContainer}>
                    <H3>{this.props.productName}</H3>
                </View>
                {quantity}
            </View>
        </TouchableOpacity>
        
    );
  }
}





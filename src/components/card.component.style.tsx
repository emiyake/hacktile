import { Colors, Spacing } from './../style/variables';
import {
  StyleSheet,
} from 'react-native';


export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    width: '100%' , 
    height: 100,
  },
  showQuantityContainer: {
      height: 150,
  },
  imageContainer: {
      backgroundColor: Colors.color_white, 
      flex: 1, 
      borderTopLeftRadius: 10, 
      borderBottomLeftRadius: 10,
      justifyContent:'center', 
      alignItems: 'center'
 },
 textContainer: {
     paddingLeft:Spacing.spacing_medium, 
     paddingRight: Spacing.spacing_medium, 
     backgroundColor: Colors.color_lightest_gray, 
     flex: 3, 
     borderTopRightRadius: 10, 
     borderBottomRightRadius: 10
 },
 labelContainer: {
     paddingTop:Spacing.spacing_medium
 }, 
 productTextContainer: {
     marginTop: Spacing.spacing_x_small
 },
 quantityContainer: {
     marginTop: Spacing.spacing_medium
 }

});
import { colors, spacing } from './../style/variables';
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
      backgroundColor: colors.color_white, 
      flex: 1, 
      borderTopLeftRadius: 10, 
      borderBottomLeftRadius: 10,
      justifyContent:'center', 
      alignItems: 'center'
 },
 textContainer: {
     paddingLeft:spacing.spacing_medium, 
     paddingRight: spacing.spacing_medium, 
     backgroundColor: colors.color_lightest_gray, 
     flex: 3, 
     borderTopRightRadius: 10, 
     borderBottomRightRadius: 10
 },
 labelContainer: {
     paddingTop:spacing.spacing_medium
 }, 
 productTextContainer: {
     marginTop: spacing.spacing_x_small
 },
 quantityContainer: {
     marginTop: spacing.spacing_medium
 }

});
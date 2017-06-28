import {
  StyleSheet
} from 'react-native';
import {Colors, Spacing} from './../style/variables';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: Spacing.spacing_medium,
  },
 textContainer: {
     paddingLeft: Spacing.spacing_medium, 
     paddingRight: Spacing.spacing_medium
 },
 imageContainer:{
   width: 16,
   height: 16,
   justifyContent: 'center'
 },
 pickerContainer:{
   marginTop: Spacing.spacing_x_small,
   marginBottom: Spacing.spacing_x_small,
 },
 pickeriOS:{
   paddingLeft: Spacing.spacing_medium, 
   paddingRight: Spacing.spacing_medium,
   height: 40, 
   width: '100%', 
   borderWidth: 1,  
   borderRadius:5, 
   borderColor:Colors.color_light_gray, 
   flexDirection:'row', 
   alignItems:'center', 
   justifyContent: 'space-between'
 },
 inputError:{
      borderColor: Colors.color_red, 
  }

});
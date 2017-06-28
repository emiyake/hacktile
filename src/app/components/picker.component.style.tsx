import { colors, spacing } from './../style/variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: spacing.spacing_medium,
  },
 textContainer: {
     paddingLeft: spacing.spacing_medium, 
     paddingRight: spacing.spacing_medium
 },
 imageContainer:{
   width: 16,
   height: 16,
   justifyContent: 'center'
 },
 pickerContainer:{
   marginTop: spacing.spacing_x_small,
   marginBottom: spacing.spacing_x_small,
 },
 pickeriOS:{
   paddingLeft: spacing.spacing_medium, 
   paddingRight: spacing.spacing_medium,
   height: 40, 
   width: '100%', 
   borderWidth: 1,  
   borderRadius:5, 
   borderColor:colors.color_light_gray, 
   flexDirection:'row', 
   alignItems:'center', 
   justifyContent: 'space-between'
 },
 inputError:{
      borderColor: colors.color_red, 
  }

});
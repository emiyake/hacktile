import { colors, spacing } from './../style/variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: 120 , 
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.color_gray,
    justifyContent:'center', 
    alignItems: 'center'

  },
 textContainer: {
     paddingLeft: spacing.spacing_medium, 
     paddingRight: spacing.spacing_medium
 },
 imageContainer:{
   width: 16,
   height: 16,
   justifyContent: 'center'
 }

});
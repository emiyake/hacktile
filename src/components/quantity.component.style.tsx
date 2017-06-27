import {
  StyleSheet
} from 'react-native';
import {Colors, Spacing} from './../style/variables';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: 120 , 
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.color_gray,
    justifyContent:'center', 
    alignItems: 'center'

  },
 textContainer: {
     paddingLeft: Spacing.spacing_medium, 
     paddingRight: Spacing.spacing_medium
 },
 imageContainer:{
   width: 16,
   height: 16,
   justifyContent: 'center'
 }

});
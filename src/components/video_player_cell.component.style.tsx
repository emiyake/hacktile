import { Colors, FontFamily, Spacing } from './../style/variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.color_white,
    width: 90,
    height: 72,
    alignItems: 'center',
    borderRadius: 5
  },
  text: {
      fontFamily: FontFamily.font_family_primary,
      fontSize: 10,
      color: Colors.color_white,
      marginTop: Spacing.spacing_x_small
  },
  productImagePlaceholder: {
    width: '100%', 
    height:'100%', 
    borderRadius: 5
  }

});
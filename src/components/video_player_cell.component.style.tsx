import { colors, fontFamily, spacing } from './../style/variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color_white,
    width: 90,
    height: 72,
    alignItems: 'center',
    borderRadius: 5
  },
  text: {
      fontFamily: fontFamily.font_family_primary,
      fontSize: 10,
      color: colors.color_white,
      marginTop: spacing.spacing_x_small
  },
  productImagePlaceholder: {
    width: '100%', 
    height:'100%', 
    borderRadius: 5
  }

});
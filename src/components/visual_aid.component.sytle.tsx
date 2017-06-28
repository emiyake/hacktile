import { colors, fontFamily, spacing } from './../style/variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: spacing.spacing_medium,
    backgroundColor: colors.color_blue,
    width: 90,
    height: 72,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5
  },
  text: {
      fontFamily: fontFamily.font_family_primary,
      fontSize: 10,
      color: colors.color_white,
      marginTop: spacing.spacing_x_small
  }

});
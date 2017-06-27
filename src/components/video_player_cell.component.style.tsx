import {
  StyleSheet
} from 'react-native';
import {Colors, Spacing, FontFamily} from './../style/variables';

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
  }

});
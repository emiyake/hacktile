import {
  StyleSheet
} from 'react-native';
import {Colors, Spacing, FontFamily} from './../style/variables';

export const styles = StyleSheet.create({
  container: {
    padding: Spacing.spacing_medium,
    backgroundColor: Colors.color_blue,
    width: 90,
    height: 72,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5
  },
  text: {
      fontFamily: FontFamily.font_family_primary,
      fontSize: 10,
      color: Colors.color_white,
      marginTop: Spacing.spacing_x_small
  }

});
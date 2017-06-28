import { Colors, Spacing, FontSize } from './../style/variables';
import { StyleSheet } from 'react-native';

const HEIGHT = 50;

export const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  primaryButton: {
    borderRadius: HEIGHT / 6,
    backgroundColor: Colors.color_blue,
  },
  secondaryBorder: {
    borderWidth: 1,
    borderColor: Colors.color_blue,
    borderRadius: HEIGHT / 2,
  },
  secondaryButton: {
    borderRadius: HEIGHT / 6,
    backgroundColor: Colors.color_white,
  },
  icon: {
    marginRight: Spacing.spacing_regular,
  },
  caption: {
    letterSpacing: 1,
    fontSize: FontSize.font_size_small,
  },
  primaryCaption: {
    color: Colors.color_white,
  },
  secondaryCaption: {
    color: Colors.color_dark_blue
  }
});
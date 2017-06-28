import { colors, spacing, fontSize } from './../style/variables';
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
    backgroundColor: colors.color_blue,
  },
  secondaryBorder: {
    borderWidth: 1,
    borderColor: colors.color_blue,
    borderRadius: HEIGHT / 2,
  },
  secondaryButton: {
    borderRadius: HEIGHT / 6,
    backgroundColor: colors.color_white,
  },
  icon: {
    marginRight: spacing.spacing_regular,
  },
  caption: {
    letterSpacing: 1,
    fontSize: fontSize.font_size_small,
  },
  primaryCaption: {
    color: colors.color_white,
  },
  secondaryCaption: {
    color: colors.color_dark_blue
  }
});
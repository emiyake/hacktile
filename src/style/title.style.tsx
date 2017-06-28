import { colors, fontFamily, fontSize } from './variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  h1: {
    fontFamily: fontFamily.font_family_primary,
    fontSize: fontSize.font_size_large,
    color: colors.color_black,
  },
  h1_white: {
    fontFamily: fontFamily.font_family_primary,
    fontSize: fontSize.font_size_large,
    color: colors.color_white,
  },
  h2: {
    fontFamily: fontFamily.font_family_primary,
    fontSize: fontSize.font_size_small,
    color: colors.color_dark_gray,
  },

  h3: {
    fontFamily: fontFamily.font_family_secondary,
    fontSize: fontSize.font_size_large,
    color: colors.color_black,
  },

  h4: {
    fontFamily: fontFamily.font_family_secondary,
    fontSize: fontSize.font_size_medium,
    color: colors.color_black,
  },

  body: {
    fontFamily: fontFamily.font_family_primary,
    fontSize: fontSize.font_size_medium,
    color: colors.color_darkest_gray,
  },
  caption: {
    fontFamily: fontFamily.font_family_primary,
    fontSize: fontSize.font_size_x_small,
    color: colors.color_dark_gray,
  },
  caption_error: {
    fontFamily: fontFamily.font_family_primary,
    fontSize: fontSize.font_size_x_small,
    color: colors.color_red,
  },
  dt: {
    fontFamily: fontFamily.font_family_primary,
    fontSize: fontSize.font_size_x_small,
    color: colors.color_dark_gray,
  },
  dd: {
    fontFamily: fontFamily.font_family_primary,
    fontSize: fontSize.font_size_small,
    color: colors.color_darkest_gray,
  },
  label: {
    fontFamily: fontFamily.font_family_primary,
    fontSize: fontSize.font_size_small,
    color: colors.color_dark_gray,
  },
  product_title: {
    fontFamily: fontFamily.font_family_secondary,
    fontSize: fontSize.font_size_x_large,
    color: colors.color_black,
  },
});
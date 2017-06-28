import { Colors, FontFamily, FontSize } from './variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  h1: {
    fontFamily: FontFamily.font_family_primary,
    fontSize: FontSize.font_size_large,
    color: Colors.color_black,
  },
  h1_white: {
    fontFamily: FontFamily.font_family_primary,
    fontSize: FontSize.font_size_large,
    color: Colors.color_white,
  },
  h2: {
    fontFamily: FontFamily.font_family_primary,
    fontSize: FontSize.font_size_small,
    color: Colors.color_dark_gray,
  },

  h3: {
    fontFamily: FontFamily.font_family_secondary,
    fontSize: FontSize.font_size_large,
    color: Colors.color_black,
  },

  h4: {
    fontFamily: FontFamily.font_family_secondary,
    fontSize: FontSize.font_size_medium,
    color: Colors.color_black,
  },

  body: {
    fontFamily: FontFamily.font_family_primary,
    fontSize: FontSize.font_size_medium,
    color: Colors.color_darkest_gray,
  },
  caption: {
    fontFamily: FontFamily.font_family_primary,
    fontSize: FontSize.font_size_x_small,
    color: Colors.color_dark_gray,
  },
  caption_error: {
    fontFamily: FontFamily.font_family_primary,
    fontSize: FontSize.font_size_x_small,
    color: Colors.color_red,
  },
  dt: {
    fontFamily: FontFamily.font_family_primary,
    fontSize: FontSize.font_size_x_small,
    color: Colors.color_dark_gray,
  },
  dd: {
    fontFamily: FontFamily.font_family_primary,
    fontSize: FontSize.font_size_small,
    color: Colors.color_darkest_gray,
  },
  label: {
    fontFamily: FontFamily.font_family_primary,
    fontSize: FontSize.font_size_small,
    color: Colors.color_dark_gray,
  },
  product_title: {
    fontFamily: FontFamily.font_family_secondary,
    fontSize: FontSize.font_size_x_large,
    color: Colors.color_black,
  },
});
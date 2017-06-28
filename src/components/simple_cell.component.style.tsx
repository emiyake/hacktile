import { colors, spacing } from './../style/variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: spacing.spacing_medium,
    backgroundColor: colors.color_white,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  }

});
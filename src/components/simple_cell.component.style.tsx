import { Colors, Spacing } from './../style/variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: Spacing.spacing_medium,
    backgroundColor: Colors.color_white,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  }

});
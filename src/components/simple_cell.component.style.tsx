import {
  StyleSheet
} from 'react-native';
import {Colors, Spacing} from './../style/variables';

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
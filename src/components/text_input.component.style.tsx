import { colors, spacing } from './../style/variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: spacing.spacing_medium,
  },
  inputText:{
    height: 40, 
    borderWidth:0,
    marginTop: spacing.spacing_x_small,
    marginBottom: spacing.spacing_x_small
  },
  inputTextiOS:{
    borderColor: colors.color_light_gray, 
    borderWidth: 1, 
    borderRadius:5,
  },
  inputError:{
      borderColor: colors.color_red, 
  }

});
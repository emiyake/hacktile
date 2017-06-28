import {
  StyleSheet
} from 'react-native';
import {Colors, Spacing} from './../style/variables';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: Spacing.spacing_medium,
    
  },
  inputText:{
    height: 40, 
    borderWidth:0,
    marginTop: Spacing.spacing_x_small,
    marginBottom: Spacing.spacing_x_small
  },
  inputTextiOS:{
    borderColor: Colors.color_light_gray, 
    borderWidth: 1, 
    borderRadius:5,
  },
  inputError:{
      borderColor: Colors.color_red, 
  }

});
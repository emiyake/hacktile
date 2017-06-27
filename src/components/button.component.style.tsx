import {StyleSheet} from 'react-native';
import {Colors} from './../style/variables'

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
    marginRight: 12,
  },
  caption: {
    letterSpacing: 1,
    fontSize: 12,
  },
  primaryCaption: {
    color: Colors.color_white,
  },
  secondaryCaption: {
    color: Colors.color_dark_blue
  }
});
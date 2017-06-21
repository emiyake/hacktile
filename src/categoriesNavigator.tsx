import { Categories } from './categories';
import { Specialties } from './specialties';
import { StackNavigator } from 'react-navigation';

export const CategoriesNavigator = StackNavigator({
  Speciaties: { screen: Specialties},
  Categories: { screen: Categories },
});

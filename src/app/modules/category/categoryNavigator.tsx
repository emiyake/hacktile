import { Category } from './category';
import { SpecialtyWithData } from './specialty';
import { StackNavigator } from 'react-navigation';

export const CategoryNavigator = StackNavigator({
  Speciaty: { screen: SpecialtyWithData},
  Category: { screen: Category },
});

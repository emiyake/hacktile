import { Categories } from './categories';
import { SpecialtiesWithData } from './specialties';
import { StackNavigator } from 'react-navigation';

export const CategoriesNavigator = StackNavigator({
  Speciaties: { screen: SpecialtiesWithData},
  Categories: { screen: Categories },
});

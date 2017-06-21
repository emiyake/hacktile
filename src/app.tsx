import { Basket } from './basket';
import { CategoriesNavigator } from './categoriesNavigator';
import { Home } from './home';
import { Orders } from './orders';
import { Settings } from './settings';
import { TabNavigator } from 'react-navigation';

export const App = TabNavigator({
  Home: { screen:  Home},
  Specialties: { screen: CategoriesNavigator},
  Basket: { screen: Basket },
  Orders: { screen: Orders },
  Settings: { screen: Settings },
}, { tabBarPosition: 'bottom', backBehavior: 'none' });

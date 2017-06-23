import { Basket } from './basket';
import { CategoriesNavigator } from './categoriesNavigator';
import { Home } from './home';
import { OrdersNavigator } from './ordersNavigator';
import { Settings } from './settings';
import { TabNavigator } from 'react-navigation';

export const TabNav = TabNavigator({
  Home: { screen:  Home},
  Specialties: { screen: CategoriesNavigator},
  Basket: { screen: Basket },
  Orders: { screen: OrdersNavigator },
  Settings: { screen: Settings },
}, { tabBarPosition: 'bottom', backBehavior: 'none' });

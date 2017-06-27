import { Cart } from './checkout';
import { CategoryNavigator } from './category';
import { Home } from './home';
import { OrderNavigator } from './order';
import { Settings } from './settings';
import { TabNavigator } from 'react-navigation';

export const TabNav = TabNavigator({
  Home: { screen:  Home},
  Specialties: { screen: CategoryNavigator},
  Basket: { screen: Cart },
  Orders: { screen: OrderNavigator },
  Settings: { screen: Settings },
}, { tabBarPosition: 'bottom', backBehavior: 'none' });

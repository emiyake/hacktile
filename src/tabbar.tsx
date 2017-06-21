import { Basket } from './basket';
import { Categories } from './categories';
import { Home } from './home';
import { Orders } from './orders';
import { Settings } from './settings';
import { TabNavigator } from 'react-navigation';

export const Tabbar = TabNavigator({
  Home: { screen:  Home},
  Categories: { screen: Categories},
  Basket: { screen: Basket },
  Orders: { screen: Orders },
  Settings: { screen: Settings },
}, { tabBarPosition: 'bottom', backBehavior: 'none' });

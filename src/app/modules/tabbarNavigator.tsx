import { Cart } from './checkout';
// import { Home } from './home';
import { OrderNavigator } from './order';
import { Settings } from './settings';
import { TabNavigator } from 'react-navigation';
import { GuideNavigator } from './../../guide/guideNavigator';
import { PeopleNavigator } from './people';

export const TabNav = TabNavigator({
  Home: { screen:  GuideNavigator},
  People: { screen: PeopleNavigator },
  Basket: { screen: Cart },
  Orders: { screen: OrderNavigator },
  Settings: { screen: Settings },
}, { tabBarPosition: 'bottom', backBehavior: 'none' });

import { StackNavigator, TabNavigator } from 'react-navigation';

import { Cart } from './checkout';
import { CategoryNavigator } from './category';
import { GuideNavigator } from './../../guide/guideNavigator';
import { Login } from './account';
import { OrderNavigator } from './order';
import { Settings } from './settings';

const TabNav = TabNavigator({
  Home: { screen:  GuideNavigator},
  Specialties: { screen: CategoryNavigator},
  Basket: { screen: Cart },
  Orders: { screen: OrderNavigator },
  Settings: { screen: Settings },
}, { tabBarPosition: 'bottom', backBehavior: 'none' });


const LoginNav = StackNavigator({
  Login: { screen: Login },
});


export const AppNav = StackNavigator({
  MainTabNavigator: { screen: TabNav },
  Login: { screen: LoginNav },
  }, {
    headerMode: 'none',
    mode:       'modal',
  },
);

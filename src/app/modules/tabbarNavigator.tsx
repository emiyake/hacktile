import { Cart } from './checkout';
import { CategoryNavigator } from './category';
// import { Home } from './home';
import { OrderNavigator } from './order';
import { Settings } from './settings';
import { TabNavigator } from 'react-navigation';
import { GuideNavigator} from './../../guide/guideNavigator';

export const TabNav = TabNavigator({
  Home: { screen:  GuideNavigator},
  Specialties: { screen: CategoryNavigator},
  Basket: { screen: Cart },
  Orders: { screen: OrderNavigator },
  Settings: { screen: Settings },
}, { tabBarPosition: 'bottom', backBehavior: 'none' });

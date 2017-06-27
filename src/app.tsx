import { Basket } from './basket';
import { CategoriesNavigator } from './categoriesNavigator';
import { GuideNavigator } from './guide/guideNavigator';
// import { Home } from './home';
import { OrdersNavigator } from './ordersNavigator';
import { Settings } from './settings';
import { TabNavigator } from 'react-navigation';


export const App = TabNavigator({
  Home: { screen:  GuideNavigator},
  Specialties: { screen: CategoriesNavigator},
  Basket: { screen: Basket },
  Orders: { screen: OrdersNavigator },
  Settings: { screen: Settings },
}, { tabBarPosition: 'bottom', backBehavior: 'none' });

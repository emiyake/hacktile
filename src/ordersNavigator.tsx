import { Login } from './login';
import { Orders } from './orders';
import { StackNavigator } from 'react-navigation';

export const OrdersNavigator = StackNavigator({
  Orders: { screen: Orders},
  Login: { screen: Login },
});

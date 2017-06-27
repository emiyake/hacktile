import { Login } from '../account';
import { Order } from './order';
import { StackNavigator } from 'react-navigation';

export const OrderNavigator = StackNavigator({
  Order: { screen: Order},
  Login: { screen: Login },
});

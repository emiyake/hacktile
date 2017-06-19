import { Login } from './login';
import { SignUp } from './signup';
import { StackNavigator } from 'react-navigation';

export const App = StackNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp},
});

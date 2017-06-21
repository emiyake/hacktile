import { Login } from './login';
import { SignUp } from './signup';
import { StackNavigator } from 'react-navigation';
import { Tabbar } from './tabbar';

export const App = StackNavigator({
  Tabbar: { screen: Tabbar },
  Login: { screen: Login },
  SignUp: { screen: SignUp},
});

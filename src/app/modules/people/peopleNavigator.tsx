import { PeopleList } from './people-list';
import { PersonComponent } from './person-component';
import { StackNavigator } from 'react-navigation';

export const PeopleNavigator = StackNavigator({
  PeopleList: { screen: PeopleList },
  People: { screen: PersonComponent },
});

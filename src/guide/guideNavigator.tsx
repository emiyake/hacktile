import { Buttons } from './buttons';
import { Home } from './../home';
import { Listings } from './listings';
import { StackNavigator } from 'react-navigation';
import { Title } from './title';
import { Typography } from './typography';

export const GuideNavigator = StackNavigator({
    Home: {screen: Home},
    Typography: { screen: Typography},
    Buttons: { screen: Buttons},
    Title: { screen: Title},
    Listings: { screen: Listings},
});

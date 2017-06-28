import { Buttons } from './buttons';
import { Home } from './../home';
import { Listings } from './listings';
import { StackNavigator } from 'react-navigation';
import { Title } from './title';
import { Typography } from './typography';
import { Forms } from './forms';

export const GuideNavigator = StackNavigator({
    Home: {screen: Home},
    Buttons: { screen: Buttons},
    Forms: {screen: Forms},
    Listings: { screen: Listings},
    Typography: { screen: Typography},
    Title: { screen: Title},
});

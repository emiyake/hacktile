import { Buttons } from './buttons';
import { Forms } from './forms';
import { Home } from './../app/modules/home';
import { Listings } from './listings';
import { StackNavigator } from 'react-navigation';
import { Title } from './title';
import { Typography } from './typography';

export const GuideNavigator = StackNavigator({
    Home: {screen: Home},
    Buttons: { screen: Buttons},
    Forms: {screen: Forms},
    Listings: { screen: Listings},
    Typography: { screen: Typography},
    Title: { screen: Title},
});

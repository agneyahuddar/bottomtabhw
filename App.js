import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import TransactionScreen from './screens/TransactionScreen';
import SearchScreen from './screens/SearchScreen';
import Instagram from './screens/Instagram';

export default function App() {
  return (
    
      <AppContainer/>
    
  );
}
const TabNavigator = createBottomTabNavigator({
  Face : {screen:Facebook},
  Insta : {screen:Instagram}
})
const AppContainer = createAppContainer(TabNavigator)



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../views/HomeScreen';
import SearchScreen from '../views/SearchScreen';

const { Screen, Navigator } = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Navigator headerMode='none' initialRouteName='Home'>
        <Screen name='Home' component={HomeScreen} />
        <Screen name='Search' component={SearchScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
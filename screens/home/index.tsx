import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeFirstScreen from './HomeFirst';
import HomeSecondScreen from './HomeSecond';
import HomeThirdScreen from './HomeThird';

const HomeTab = createStackNavigator();
const HomeStack = createStackNavigator();

export function HomeTabScreen() {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen name="HomeFirstScreen" component={HomeFirstScreen} />
    </HomeTab.Navigator>
  );
}

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name="HomeSecondScreen" component={HomeSecondScreen} />
        <HomeStack.Screen name="HomeThirdScreen" component={HomeThirdScreen} />
    </HomeStack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
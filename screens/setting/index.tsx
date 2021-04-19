import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingFirstScreen from './SettingFirst';
import SettingSecondScreen from './SettingSecond';
import SettingThirdScreen from './SettingThird';

const SettingStack = createStackNavigator();
const SettingTab = createStackNavigator();

export function SettingTabScreen() {
  return (
    <SettingTab.Navigator>
      <SettingTab.Screen name="SettingFirstScreen" component={SettingFirstScreen} />
      <SettingTab.Screen name="SettingSecondScreen" component={SettingSecondScreen} />
    </SettingTab.Navigator>
  );
}

export function SettingStackScreen() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="SettingThirdScreen" component={SettingThirdScreen} />
    </SettingStack.Navigator>
  );
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

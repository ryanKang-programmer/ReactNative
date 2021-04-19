/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import LinkingConfiguration from './LinkingConfiguration';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeTabScreen, HomeStackScreen} from '../screens/home'
import {SettingTabScreen, SettingStackScreen} from '../screens/setting'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <StackNavigator/>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={TabNavigator}></Stack.Screen>
      <Stack.Screen name="HomeStack" component={HomeStackScreen}></Stack.Screen>
      <Stack.Screen name="Settings" component={SettingTabScreen}></Stack.Screen>
      <Stack.Screen name="SettingStack" component={SettingStackScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'ios-list' : 'ios-list';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
        <Tab.Screen name="Home" component={HomeTabScreen} options={{ tabBarBadge: 5 }} />
        <Tab.Screen name="Settings" component={SettingTabScreen} />
    </Tab.Navigator>
  );
}

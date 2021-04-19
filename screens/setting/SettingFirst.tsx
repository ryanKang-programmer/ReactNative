import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Button } from 'react-native';

export default function SettingFirstScreen( {navigation} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setting</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button
        title="Setting 1st Screen"
        onPress={() => navigation.navigate('SettingFirstScreen')}
      />
      <Button
        title="Setting 2nd Screen"
        onPress={() => navigation.navigate('SettingSecondScreen')}
      />
      <Button
        title="Setting 3rd Screen"
        onPress={() => navigation.navigate('SettingStack', {screen: 'SettingThirdScreen'})}
      />
    </View>
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

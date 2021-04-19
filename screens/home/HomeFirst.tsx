import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux'
import {loginAcion, logoutAction} from '../../actions/action'

export default function HomeFirstScreen( {navigation} ) {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button
        title="Home 1st Screen"
        onPress={() => navigation.navigate('HomeFirstScreen')}
      />
      <Button
        title="Home 2nd Screen"
        onPress={() => navigation.navigate('HomeStack', {screen: 'HomeSecondScreen'})}
      />
      <Button
        title="Home 3rd Screen"
        onPress={() => navigation.navigate('HomeStack', {screen: 'HomeThirdScreen'})}
      />
      <Button
        title="LogIn"
        onPress={() => {console.log('LogIn'); dispatch(loginAcion({id:1,pass:2}))}}
      />
      <Button
        title="LogOut"
        onPress={() => {console.log('LogOut'); dispatch(logoutAction())}}
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

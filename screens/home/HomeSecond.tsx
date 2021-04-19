import * as React from 'react';
import { StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useSelector } from 'react-redux'

export default function HomeSecondScreen( {navigation} ) {
  const reduxState = useSelector((state:any) => state);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeSecondScreen Contents</Text>
      <Text style={styles.title}>{reduxState.user.user.id}</Text>
      <Text style={styles.title}>{reduxState.user.user.pass}</Text>
      {reduxState.user.isLoggedIn == true ? <Text>true</Text>:<Text>false</Text>}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/HomeSecondScreen.tsx" />
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

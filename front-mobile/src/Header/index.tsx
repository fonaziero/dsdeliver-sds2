import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/logo.png')}></Image>
      <Text>DS Delivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    heigth: 90,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center'
  },
});

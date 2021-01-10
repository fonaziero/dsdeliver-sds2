import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

 function Header() {

  const navigation = useNavigation();
  
  const handleOnPress = () => {
    navigation.navigate('Home');
  }

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
          <Image style={styles.imgStyle} resizeMode="contain" source={require('../assets/logo.png')}/>
        <Text style={styles.text}>DS Delivery</Text>
      </View>
    </TouchableWithoutFeedback>  
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
  text: {
    display: 'flex',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: '#fff',
    marginRight: 'auto',
    marginLeft: 15,
    fontFamily: 'OpenSans_700Bold'
  },
  imgStyle: {
    display: 'flex',
    height: 'auto',
    width: 50,
    marginLeft: 'auto'
  }
});

export default Header;
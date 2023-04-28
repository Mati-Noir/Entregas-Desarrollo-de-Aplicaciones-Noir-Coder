import React from 'react'
import { View, Image } from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.logo}source={{uri:"https://img.freepik.com/vector-premium/burger-vintage-style-logo-restaurante-comida-rapida_605910-262.jpg"}}></Image>
    </View>
  );
};

export default Header;
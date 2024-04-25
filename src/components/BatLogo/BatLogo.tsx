import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './Style';
import batLogo from '../../../assets/img/bat-logo.png'

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>BAT PASS </Text>
        <Image 
            source={batLogo}
            style={{
                resizeMode: 'contain',
                height: 200
            }} 
        />
    </>
  );
}
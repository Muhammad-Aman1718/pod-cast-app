import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeadPhones from 'react-native-vector-icons/Feather';
import Con from '../../assests/icon/headphone.svg';

const Register = () => {
  return (
    <View>
      <Icon name="home" size={50} color="#007AFF" />
      <HeadPhones name="headphones" size={50} color="#007AFF" />
      <Con />
    </View>
  );
};

export default Register;

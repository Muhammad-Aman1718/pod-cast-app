import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';
import ProfileImg from '../../../assests/imgs/profileImg.png';

const Home = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <View>
        <Image source={ProfileImg} />
      </View>
    </View>
  );
};

export default Home;

import React from 'react';
import { View } from 'react-native';
import Loader from '../../components/loader/Loader';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Loader visible={true} color="#365584ff" size={40} text={false} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#182F52',
  },
};

export default Splash;

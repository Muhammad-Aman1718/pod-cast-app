import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../../assests/icon/headphone.svg';

const Register = () => {
  return (
    <View style={styles.container}>
      <View>
        <Logo width={40} height={40} stroke="white" />
        <Text>Pod Cast</Text>
      </View>
      <View>
        <View>
          <Text>Login</Text>
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#182F52',
  },
});

export default Register;

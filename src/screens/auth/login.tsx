import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HeadPhone from '../../assests/icon/headphone.svg';
import AuthInput from '../../components/inputs/AuthInput';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <HeadPhone width={40} height={40} stroke="white" />
        <Text style={styles.logoContainerText}>Pod Cast</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputContainerPageTitle}>
          <Text style={styles.pageTitleText}>Login</Text>
          <Text style={styles.pageTitleDiscription}>
            Please sign in to continue with the app.
          </Text>
        </View>

        <AuthInput inputTitle="Username" placeHolder="username" />
        <AuthInput inputTitle="Password" placeHolder="At least 8 character" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'green',
    flex: 1,
    backgroundColor: '#182F52',
    padding: 10,
  },
  logoContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 10,
  },
  logoContainerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
  },
  inputContainer: {},
  inputContainerPageTitle: {
    alignItems: 'center',
  },
  pageTitleText: {
    color: 'white',
    fontWeight: '600',
  },
  pageTitleDiscription: {
    color: 'rgba(157, 157, 157, 1) ',
  },
});

export default Login;

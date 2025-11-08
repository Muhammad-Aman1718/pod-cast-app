import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import HeadPhone from '../../assests/icon/headphone.svg';
import AuthInput from '../../components/inputs/AuthInput';
import AuthBtn from '../../components/buttons/AuthBtn';
import GoogleFacebook from '../../components/buttons/GoogleFacebook';
import GoogleIcon from '../../assests/icon/google.svg';
import FacebookIcon from '../../assests/icon/facebook.svg';
import ProfileIcon from '../../assests/icon/Profile.svg';
import LockIcon from '../../assests/icon/Lock.svg';
import Screen from '../../components/common/Screen';

const Login = () => {
  const navigation = useAppNavigation();
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <HeadPhone width={40} height={40} stroke="white" />
          <Text style={styles.logoContainerText}>Podcast</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputContainerPageTitle}>
            <Text style={styles.pageTitleText}>Login</Text>
            <Text style={styles.pageTitleDiscription}>
              Please sign in to continue with the app.
            </Text>
          </View>

          <AuthInput
            inputTitle="Username"
            placeHolder="username"
            IconComponent={ProfileIcon}
          />
          <AuthInput
            inputTitle="Password"
            placeHolder="At least 8 character"
            IconComponent={LockIcon}
          />
          <Text style={styles.forgetText}>Forget Password?</Text>
          <AuthBtn btnTitle="Sign In" />
        </View>
        <View style={styles.googleFaceContainer}>
          <GoogleFacebook IconComponent={GoogleIcon} title="Google" />
          <GoogleFacebook IconComponent={FacebookIcon} title="Facebook" />
        </View>
        <View style={styles.alreadyAccount}>
          <Text style={styles.alreadyAccountText}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Auth', { screen: 'Register' })}
          >
            <Text style={styles.signText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#182F52',
    padding: 10,
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 10,
    marginBottom: 40,
  },
  logoContainerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
  },
  inputContainer: {
    rowGap: 20,
  },
  inputContainerPageTitle: {
    alignItems: 'center',
    rowGap: 5,
  },
  pageTitleText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  pageTitleDiscription: {
    color: 'rgba(157, 157, 157, 1) ',
    fontSize: 12,
  },
  forgetText: {
    color: 'white',
    marginTop: -10,
    textAlign: 'right',
    fontSize: 16,
    marginBottom: 15,
  },
  googleFaceContainer: {
    marginTop: 30,
    flexDirection: 'row',
    columnGap: 10,
  },
  alreadyAccount: {
    marginTop: 50,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  alreadyAccountText: {
    color: 'rgba(157, 157, 157, 1)',
    fontSize: 14,
  },
  signText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default Login;

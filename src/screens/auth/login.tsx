import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import AuthInput from '../../components/inputs/AuthInput';
import GoogleIcon from '../../assests/icon/google.svg';
import FacebookIcon from '../../assests/icon/facebook.svg';
import FingerPrintIcon from '../../assests/icon/fingerPrint.svg';
import Screen from '../../components/common/Screen';
import CustomHeader from '../../components/CustomHeader';
import WelcomeScreenBtn from '../../components/buttons/WelcomeScreenBtn';
import GoogleFacebookBtn from '../../components/buttons/GoogleFacebookBtn';

const Login = () => {
  const navigation = useAppNavigation();
  return (
    <Screen>
      {/* <View style={styles.container}>
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
          </View> */}

      <View style={styles.container}>
        <CustomHeader title="Log In" />
        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <AuthInput
            inputTitle="Email or Mobile Number"
            placeHolder="example@example.com"
          />
          <AuthInput inputTitle="Password" placeHolder="*************" />
          <Text style={styles.forgetText}>Forget Password?</Text>
          <WelcomeScreenBtn
            title="Log In"
            textStyle={{ fontSize: 24, color: 'white' }}
            customStyle={{ backgroundColor: '#2260FF' }}
          />
          <Text style={styles.orText}>or</Text>
          <View style={styles.authBtn}>
            <GoogleFacebookBtn IconComponent={GoogleIcon} />
            <GoogleFacebookBtn IconComponent={FacebookIcon} />
            <GoogleFacebookBtn IconComponent={FingerPrintIcon} />
          </View>
          <View style={styles.alreadyAccount}>
            <Text style={styles.alreadyAccountText}>
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Auth', { screen: 'Register' })
              }
            >
              <Text style={styles.signText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    width: '100%',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
    rowGap: 10,
  },
  welcomeText: {
    fontSize: 24,
    color: '#2260FF',
    fontWeight: '600',
    width: '100%',
    marginBottom: 50,
  },
  forgetText: {
    fontSize: 12,
    fontWeight: 500,
    color: '#2260FF',
    textAlign: 'right',
    width: '100%',
    marginBottom: 50,
  },
  orText: {
    fontSize: 12,
    fontWeight: '300',
    color: '#070707',
  },
  authBtn: {
    flexDirection: 'row',
    columnGap: 10,
  },
  alreadyAccount: {
    flexDirection: 'row',
  },
  alreadyAccountText: {
    fontSize: 12,
    color: '#070707',
    fontWeight: '300',
  },
  signText: {
    fontSize: 12,
    color: '#2260FF',
    fontWeight: '400',
  },
});

export default Login;

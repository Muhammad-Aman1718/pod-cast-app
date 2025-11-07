import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ProfileIcon from '../../assests/icon/Profile.svg';
import Icon from 'react-native-vector-icons/Feather';

interface AuthInputProps {
  inputTitle?: string;
  placeHolder?: string;
  iconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const AuthInput: React.FC<AuthInputProps> = ({ inputTitle, placeHolder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = inputTitle?.toLowerCase() === 'password';

  return (
    <View style={styles.container}>
      {inputTitle && <Text style={styles.text}>{inputTitle}</Text>}
      <View style={styles.inputContainer}>
        <ProfileIcon width={24} height={24} stroke="white" />
        <TextInput
          style={styles.input}
          placeholder={placeHolder}
          placeholderTextColor="rgba(157, 157, 157, 1)"
          secureTextEntry={isPasswordField && !showPassword}
          keyboardType={isPasswordField ? 'default' : 'email-address'}
        />
        {inputTitle == 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? 'eye' : 'eye-off'}
              color="white"
              size={20}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    marginBottom: 10,
  },

  inputContainer: {
    borderRadius: 10,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  input: {
    flex: 1,
  },
  icon: {},
});

export default AuthInput;

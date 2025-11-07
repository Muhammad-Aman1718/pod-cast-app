import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface GoogleFacebookProps {
  IconComponent?: React.FC<SvgProps>;
  title?: string;
}

const GoogleFacebook: React.FC<GoogleFacebookProps> = ({
  IconComponent,
  title,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {IconComponent && <IconComponent width={24} height={24} />}
      <Text style={styles.text}>{title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
  },
  text: {
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: 500,
  },
});

export default GoogleFacebook;

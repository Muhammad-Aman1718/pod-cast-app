import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppNavigation } from '../hooks/useAppNavigation';
import Icon from 'react-native-vector-icons/Entypo';

interface CustomHeaderProps {
  title?: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  const navigation = useAppNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.arrow}
        onPress={() => navigation.goBack()}
      >
        <Icon
          name="chevron-thin-left"
          size={24}
          color="#2260FF"
          style={{
            width: 35,
            textShadowColor: '#2260FF',
            textShadowOffset: { width: 0.5, height: 0.5 },
            textShadowRadius: 1,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.pageTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    flex: 1,
  },
  pageTitle: {
    color: '#2260FF',
    flex: 1.5,
    alignItems: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
});

export default CustomHeader;

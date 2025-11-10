import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/main/home/home';
import Chat from '../../screens/main/chat/chat';
import Profile from '../../screens/main/profile/profile';
import Appointment from '../../screens/main/appointment/appointment';
import HomeIcon from '../../assests/icon/home.svg';
import ChatIcon from '../../assests/icon/chat.svg';
import ProfileIcon from '../../assests/icon/profile.svg';
import AppointmentIcon from '../../assests/icon/appointment.svg';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const iconColor = isFocused ? '#00278C' : '#FFFFFF';

        const icons: Record<string, any> = {
          Home: <HomeIcon width={24} height={24} stroke={iconColor} />,
          Chat: <ChatIcon width={24} height={24} stroke={iconColor} />,
          Profile: <ProfileIcon width={24} height={24} stroke={iconColor} />,
          Appointment: (
            <AppointmentIcon width={24} height={24} stroke={iconColor} />
          ),
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={styles.tabButton}
          >
            {icons[route.name]}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Appointment" component={Appointment} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#2563EB',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 30,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 10,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

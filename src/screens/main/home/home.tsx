// import React from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { Image, Text, View } from 'react-native';
// import { RootStackParamList } from '../../../types/navigation';
// import ProfileImg from '../../../assests/imgs/profileImg.png';
// import SettingIcon from '../../../assests/icon/setting.svg';
// import NotificationIcon from '../../../assests/icon/notification.svg';
// import HeartIcon from '../../../assests/icon/heart.svg';
// import SearchIcon from '../../../assests/icon/search.svg';

// const Home = () => {
//   const navigation = useNavigation<RootStackParamList>();
//   return (
//     <View>
//       <View>
//         <Image source={ProfileImg} />
//       </View>
//     </View>
//   );
// };

// export default Home;

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import NotificationIcon from '../../../assests/icon/notification.svg';
import SettingIcon from '../../../assests/icon/setting.svg';
import HeartIcon from '../../../assests/icon/heart.svg';
import SearchIcon from '../../../assests/icon/search.svg';
import FilterIcon from '../../../assests/icon/filter.svg';
import DoctorIcon from '../../../assests/icon/doctors.svg';
import ProfileImg from '../../../assests/imgs/profileImg.png';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      {/* --- Top Row: Profile + Greeting + Icons --- */}
      <View style={styles.topRow}>
        <View style={styles.profileSection}>
          <Image source={ProfileImg} style={styles.profileImg} />
          <View style={styles.textContainer}>
            <Text style={styles.greetText}>Hi, Welcome Back</Text>
            <Text style={styles.nameText}>John Doe</Text>
          </View>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <NotificationIcon
              width={14}
              height={18}
              stroke="#000000"
              strokeWidth={0.1}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <SettingIcon
              width={16}
              height={18}
              stroke="#000000"
              strokeWidth={0.1}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* --- Middle Row: Doctors + Favorite --- */}
      <View style={styles.searchSection}>
        <View style={styles.optionRow}>
          <TouchableOpacity style={styles.option}>
            <DoctorIcon
              width={18}
              height={18}
              stroke="#2260FF"
              strokeWidth={0.3}
            />
            <Text style={styles.optionText}>Doctors</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <HeartIcon
              width={18}
              height={18}
              stroke="#2260FF"
              strokeWidth={1}
            />
            <Text style={styles.optionText}>Favorite</Text>
          </TouchableOpacity>
        </View>

        {/* --- Search Bar --- */}
        <View style={styles.searchBar}>
          <TouchableOpacity style={styles.filterIcon}>
            <FilterIcon width={18} height={18} stroke="#2260FF" />
          </TouchableOpacity>
          <TextInput style={styles.searchSectionInput} />
          <TouchableOpacity style={styles.searchIcon}>
            <SearchIcon width={18} height={18} stroke="#2260FF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F8FF',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  greetText: {
    color: '#2260FF',
    fontSize: 12,
    fontWeight: '300',
  },
  nameText: {
    color: '#000000',
    fontWeight: '400',
    fontSize: 14,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    width: 27,
    height: 27,
    borderRadius: 20,
    backgroundColor: '#CAD6FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchSection: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 25,
  },
  option: {
    alignItems: 'center',
  },
  optionText: {
    marginTop: 3,
    fontSize: 12,
    color: '#2260FF',
    fontWeight: '300',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#CAD6FF',
    borderRadius: 20,
    paddingHorizontal: 12,
    // paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 33,
  },
  filterIcon: {
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 12,
  },
  searchSectionInput: {
    borderWidth: 1,
    width: '100%',
  },
  searchIcon: {
    backgroundColor: '#CAD6FF',
  },
});

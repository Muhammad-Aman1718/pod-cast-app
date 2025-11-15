import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import StarIcon from '../assets/icons/star.svg';
import CommentIcon from '../assets/icons/comment.svg';
import QuestionIcon from '../assets/icons/question.svg';
import HeartIcon from '../assets/icons/heart.svg';

interface DoctorCardProps {
  image: any;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  image,
  name,
  specialty,
  rating,
  reviews,
}) => {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image source={image} style={styles.profileImg} />

      {/* Name + Title Box */}
      <View style={styles.infoBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>

      {/* Bottom Icons Row */}
      <View style={styles.bottomRow}>
        {/* Rating */}
        <View style={styles.ratingBox}>
          <StarIcon width={18} height={18} fill="#2563EB" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>

        {/* Reviews */}
        <View style={styles.ratingBox}>
          <CommentIcon width={18} height={18} fill="#2563EB" />
          <Text style={styles.ratingText}>{reviews}</Text>
        </View>

        {/* Help Icon */}
        <TouchableOpacity style={styles.circleButton}>
          <QuestionIcon width={20} height={20} fill="#2563EB" />
        </TouchableOpacity>

        {/* Favorite Icon */}
        <TouchableOpacity style={styles.circleButton}>
          <HeartIcon width={20} height={20} fill="#2563EB" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DCE7FF',
    padding: 15,
    borderRadius: 20,
    marginVertical: 10,
  },

  profileImg: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },

  infoBox: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 20,
    marginTop: -50,
    marginLeft: 80,
    width: '72%',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F3C88',
  },

  specialty: {
    fontSize: 13,
    marginTop: 3,
    color: '#333',
  },

  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },

  ratingBox: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: 'center',
  },

  ratingText: {
    fontSize: 14,
    marginLeft: 5,
    fontWeight: '600',
    color: '#1F3C88',
  },

  circleButton: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export const SafeArea = ({children}) => {
  return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});

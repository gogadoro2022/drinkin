import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

export default function LiquorBottomSheet() {
  return (
    <View style={styles.bottomSheetContainer}>
      <Text>bottom sheet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: 20,
  },
});

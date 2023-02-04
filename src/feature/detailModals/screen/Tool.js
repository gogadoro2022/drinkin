import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeArea} from '../../../component/util/SafeArea';

export default function Tool() {
  return (
    <SafeArea>
      <View>
        <Text style={styles.title}>도구 이름</Text>
        <Text style={styles.engTitle}>Tool</Text>
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: 'black',
  },
  engTitle: {
    fontSize: 20,
    color: '#787674',
  },
});

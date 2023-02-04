import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeArea} from '../../../component/util/SafeArea';

export default function Abv() {
  return (
    <SafeArea>
      <View>
        <Text style={styles.title}>알코올 도수</Text>
        <Text style={styles.engTitle}>ABV</Text>
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

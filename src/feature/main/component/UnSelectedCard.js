import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

export default function UnSelectedCard({
  cocktailName,
  cocktailEnglishName,
  selectedHandler,
}) {
  return (
    <TouchableOpacity onPress={selectedHandler}>
      <View style={styles.cocktailContainer}>
        <Text>{cocktailName}</Text>
        <Text>{cocktailEnglishName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cocktailContainer: {
    height: 160,
    width: 108,
    borderRadius: 8,
    backgroundColor: '#F7F7F7',
    marginLeft: 9,
    marginBottom: 8,
  },
});

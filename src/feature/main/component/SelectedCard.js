import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function SelectedCard({
  cocktailName,
  cocktailEnglishName,
  selectedHandler,
}) {
  // useContext 사용. 유저가 마셔본 칵테일 목록에서 삭제하는 함수를 가져옴

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
    backgroundColor: 'green',
    marginLeft: 9,
    marginBottom: 8,
  },
});

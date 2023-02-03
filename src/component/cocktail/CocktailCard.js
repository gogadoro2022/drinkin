import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function CocktailCard({nav, recomanded}) {
  const {
    cocktailName,
    imageUri,
    abv,
    level,
    sugarContent,
    cocktailDescription,
    base,
    ingredient,
    garnish,
  } = recomanded;

  return (
    <View style={styles.cardContainer}>
      <Text>{cocktailName}</Text>
      <View>
        <Text>{`난이도 :${level}`}</Text>
        <Text>{`도  수 :${abv}`}</Text>
        <Text>{`당  도 :${sugarContent}`}</Text>
      </View>
      <View>
        <Text>{cocktailDescription}</Text>
      </View>
      <View>
        <Text>{`베이스  ${base}`}</Text>
        <Text>{`재  료  ${ingredient}`}</Text>
        <Text>{`가니쉬  ${garnish}`}</Text>
        {/* 배열이 비어있을때는 이렇게 나타내줘 만들어야함 */}
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={nav}>
          <Text>레시피 보기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: '80%',
    marginRight: 16,
    borderWidth: 3,
    borderColor: '#24221F',
    backgroundColor: '#FCFCFC',
    borderRadius: 7,
  },
  btnContainer: {
    position: 'absolute',
    bottom: 40,
  },
});

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function CocktailCard({navigation, recomanded}) {
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
      <Text style={styles.title}>{cocktailName}</Text>
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('cocktailDetailScreen', {
              recomanded: recomanded,
            });
          }}>
          <Text style={styles.btnText}>자세히 보기</Text>
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
    alignItems: 'center',
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 24,
    borderWidth: 3,
    borderColor: '#777775',
    backgroundColor: '#24231F',
    height: 40,
    width: 278,
  },
  btnText: {
    color: '#e7e7e7',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black',
  },
});

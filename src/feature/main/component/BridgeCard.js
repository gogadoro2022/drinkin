import React, {useContext, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {SelectContext} from '../../../service/select/select.context';

export default function BridgeCard({item}) {
  const [isSelected, setIsSelected] = useState(false);
  const {addToSelected, removeFromSelected, selectedCocktail} =
    useContext(SelectContext);

  const {cocktailName, cocktailEnglishName} = item;

  const selectedHandler = item => {
    isSelected ? removeFromSelected(item) : addToSelected(item);
    setIsSelected(!isSelected);
  };

  return (
    <TouchableOpacity onPress={() => selectedHandler(item)}>
      <View
        style={
          isSelected
            ? styles.selectedCocktailContainer
            : styles.cocktailContainer
        }>
        <Text>{cocktailName}</Text>
        <Text>{cocktailEnglishName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  selectedCocktailContainer: {
    height: 160,
    width: 108,
    borderRadius: 8,
    backgroundColor: 'green',
    marginLeft: 9,
    marginBottom: 8,
  },
  cocktailContainer: {
    height: 160,
    width: 108,
    borderRadius: 8,
    backgroundColor: '#F7F7F7',
    marginLeft: 9,
    marginBottom: 8,
  },
});

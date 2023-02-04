import React, {useContext, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {SelectContext} from '../../../service/select/select.context';

export default function BridgeCard({
  cocktailEnglishName,
  cocktailName,
  cocktail,
}) {
  const [isSelected, setIsSelected] = useState(false);
  const {addToSelected, removeFromSelected, selectedCocktail} =
    useContext(SelectContext);

  const selectedHandler = cocktail => {
    setIsSelected(!isSelected);
    isSelected ? addToSelected(cocktail) : removeFromSelected(cocktail);
    console.log(isSelected);
  };

  return (
    <TouchableOpacity onPress={selectedHandler}>
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

// {isSelected ? (
//   <SelectedCard
//     cocktailName={cocktailName}
//     cocktailEnglishName={cocktailEnglishName}
//     selectedHandler={selectedHandler}
//   />
// ) : (
//   <UnSelectedCard
//     cocktailName={cocktailName}
//     cocktailEnglishName={cocktailEnglishName}
//     selectedHandler={selectedHandler}
//   />
// )}

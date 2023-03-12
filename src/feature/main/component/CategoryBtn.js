import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

const BTN_NAME = {
  tequila: '데킬라',
  rum: '럼',
  wien: '와인',
  vodka: '보드카',
};

// 클릭했을때 효과는 어떻게 할지?
// 클릭된 컴포넌트 카테고리 전송. 해당 ui만 보이게 하는 함수에서 스타일링 효과도 줄 수 있나?

export default function CategoryBtn({
  item,
  filterCategory,
  isSelect,
  handleSelected,
}) {
  const {categoryName, cocktails} = item;

  return (
    <View
      style={[
        styles.categoryBtnContainer,
        isSelect && styles.selectedCategory,
      ]}>
      <TouchableOpacity
        onPress={() => {
          filterCategory(categoryName);
          handleSelected(categoryName);
        }}>
        {categoryName && (
          <Text
            style={[
              styles.categoryTitle,
              isSelect && styles.selectedCategoryTitle,
            ]}>{`${BTN_NAME[categoryName]} 베이스`}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryBtnContainer: {
    backgroundColor: '#F7F7F7',
    borderRadius: 4,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  selectedCategory: {
    backgroundColor: '#24231F',
    borderRadius: 4,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  categoryTitle: {
    fontWeight: '700',
    fontSize: 14,
    color: '#24221F',
    lineHeight: 20,
  },
  selectedCategoryTitle: {
    fontWeight: '700',
    fontSize: 14,
    color: '#FCFCFC',
    lineHeight: 20,
  },
});

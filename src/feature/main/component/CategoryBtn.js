import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

const BTN_NAME = {
  tequila: '데킬라',
  rum: '럼',
  wien: '와인',
  vodka: '보드카',
};

// 클릭했을때 효과는 어떻게 할지?
// 클릭된 컴포넌트 카테고리 전송. 해당 ui만 보이게 하는 함수에서 스타일링 효과도 줄 수 있나?

export default function CategoryBtn({item, filterCategory}) {
  const {categoryName, cocktails} = item;

  return (
    <TouchableOpacity onPress={() => filterCategory(categoryName)}>
      {categoryName ? (
        <Text>{`${BTN_NAME[categoryName]} 베이스`}</Text>
      ) : (
        <Text>전체</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

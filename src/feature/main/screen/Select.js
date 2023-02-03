import React, {useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LoadingIndicator from '../../../component/util/LoadingIndicator';
import {SafeArea} from '../../../component/util/SafeArea';
import {CocktailContext} from '../../../service/cocktail/cocktail.context';

// * 2월 3일 작업할것
// 칵테일 아이템을 눌렀을때 체크되어있는 상태로...
// 그 데이터를 스테이트에 추가한 상태로, 해제하면 스테이트에서 삭제한 상태로
// 데이터를 가지고 있다가 선택완료 할 때 그 state를 넘겨주면 될듯

// 눌렀을때 그 페이지의 ui를 바꾸려면 상태에 들어있는 아이템의 ui를 if 걸어주면 될듯

/* ----------------
나중에..
select 창이 중요하네. 여기서 선택했을때 불리언으로 선택된 화면도 만들어야하지만,
선택이 체크 됐을때는 유저데이터에 set했다가 체크를 풀었을때는 다시 삭제하는 것도 만들어야함.
그런데 로그인이 구현되고 유저 데이터가 나와야 가능하니까 조금 시간이 걸리겠다. */

export default function Select({navigation}) {
  const {cocktails, isLoading, error} = useContext(CocktailContext);

  return (
    <SafeArea>
      {isLoading && <LoadingIndicator />}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>마셔봤던 칵테일 선택</Text>
        <Text style={styles.subText}>
          선택을 기반으로 다양한 칵테일을 추천해 드립니다
        </Text>
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryBtnContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Text>위스키 베이스</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryBtnContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Text>위스키 베이스</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryBtnContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Text>위스키 베이스</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={styles.allCocktailContainer}
        data={cocktails}
        renderItem={({item}) => {
          const {imageUri, cocktailName, cocktailEnglishName} = item;
          return (
            <TouchableOpacity>
              <View style={styles.cocktailContainer}>
                <Text>{cocktailName}</Text>
                <Text>{cocktailEnglishName}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        numColumns={3}
      />
      <View style={styles.selecBtnContainer}>
        {/* 여기서 리셋 떄려야함 */}
        <TouchableOpacity
          onPress={() => navigation.reset({routes: [{name: 'recomand'}]})}>
          <Text style={styles.selecBtnText}>선택완료</Text>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  selecBtnContainer: {
    height: 52,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selecBtnText: {
    color: '#e7e7e7',
    fontWeight: 400,
    fontSize: 15,
  },
  categoryBtnContainer: {
    borderRadius: 8,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    height: 37,
  },
  categoryContainer: {
    flexDirection: 'row',
    margin: 19,
  },
  titleContainer: {
    justifyContent: 'center',
    marginTop: 16,
    marginLeft: 16,
  },
  titleText: {
    fontWeight: '700',
    color: '#24231F',
    fontSize: 20,
  },
  subText: {
    fontSize: 14,
    color: '#777775',
    fontWeight: '700',
  },
  allCocktailContainer: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
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

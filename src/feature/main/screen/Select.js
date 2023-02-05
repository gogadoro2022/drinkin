import React, {useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LoadingIndicator from '../../../component/util/LoadingIndicator';
import {SafeArea} from '../../../component/util/SafeArea';
import {CocktailContext} from '../../../service/cocktail/cocktail.context';
import BridgeCard from '../component/BridgeCard';
import {SelectContext} from '../../../service/select/select.context';
import CategoryBtn from '../component/CategoryBtn';

// * 2월 3일 작업할것
// 칵테일 아이템을 눌렀을때 체크되어있는 상태로...
// 그 데이터를 스테이트에 추가한 상태로, 해제하면 스테이트에서 삭제한 상태로
// 데이터를 가지고 있다가 선택완료 할 때 그 state를 넘겨주면 될듯

// 눌렀을때 그 페이지의 ui를 바꾸려면 상태에 들어있는 아이템의 ui를 if 걸어주면 될듯

/* ----------------
나중에..
select 창이 중요하네. 여기서 선택했을때 불리언으로 선택된 화면도 만들어야하지만,
선택이 체크 됐을때는 유저데이터에 set했다가 체크를 풀었을때는 다시 삭제하는 것도 만들어야함.
그런데 로그인이 구현되고 유저 데이터가 나와야 가능하니까 조금 시간이 걸리겠다. 

** 데이터를 바꾸면 코드를 건드리지 않아도 만들어질 수 있는 방법을 찾아내고 싶다.

*/

export default function Select({navigation}) {
  const {cocktails, isLoading, error, setCocktails} =
    useContext(CocktailContext);
  const {selectedCocktail} = useContext(SelectContext);
  const totalCocktails = cocktails.reduce((acc, cur) => {
    return [...acc, ...cur.cocktails];
  }, []);
  console.log(totalCocktails);
  const [filteredCocktails, setFilteredCocktails] = useState(totalCocktails);
  // const [selectedCategory, setSelectedCategory] = useState(null);

  const filterCategory = category => {
    const filtered = cocktails.filter(obj => {
      return obj.categoryName === category;
    });
    setFilteredCocktails(filtered);
    console.log('filtered --', filtered);
  };

  //if cocktails.categoryName === tequila ?

  // 1. 버튼컴포넌트에서 클릭당한 곳의 '카테고리네임'을 여기로 보내줌
  // 2. 그 카테고리를 가지고 필터링을함. 같은 카테고리네임을 가진 객체만 남김
  // 3. 해당 객체의 칵테일 배열을 가져와서 플랫리스트에 전송

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
        <FlatList
          horizontal={true}
          data={cocktails}
          renderItem={({item}) => {
            return <CategoryBtn item={item} filterCategory={filterCategory} />;
          }}
        />
      </View>
      <FlatList
        style={styles.allCocktailContainer}
        data={filteredCocktails}
        renderItem={({item}) => {
          return <BridgeCard item={item} />;
        }}
        numColumns={3}
      />
      <View>
        {
          // 재미로 있는 기능. 나중에는 삭제할것
          selectedCocktail.map(item => {
            const {cocktailName, id} = item;
            return <Text key={id}>{cocktailName}</Text>;
          })
        }
      </View>
      <View style={styles.selecBtnContainer}>
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
    height: 40,
    backgroundColor: 'yellow',
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
});

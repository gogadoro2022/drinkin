import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LoadingIndicator from '../../../component/util/LoadingIndicator';
import {SafeArea} from '../../../component/util/SafeArea';
import {CocktailContext} from '../../../service/cocktail/cocktail.context';
import BridgeCard from '../component/BridgeCard';
import {SelectContext} from '../../../service/select/select.context';
import CategoryBtn from '../component/CategoryBtn';
import {sendSelectedCocktailRequest} from '../../../service/auth/auth.service';

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
  const [isSelected, setIsSelected] = useState(null);
  const {cocktails, isLoading, error, sendSelectedCocktails} =
    useContext(CocktailContext);
  const [filteredCocktails, setFilteredCocktails] = useState(totalCocktails);
  const [selectedCocktail, setSelectedCocktail] = useState([]);
  const totalCocktails = cocktails.reduce((acc, cur) => {
    return [...acc, ...cur.cocktails];
  }, []);

  const handleSelected = category => {
    setIsSelected(category);
  };

  const handleSelectedCocktail = item => {
    setSelectedCocktail(selectedCocktail, ...item);
  };

  const onPressNextOrCancle = item => {
    if (selectedCocktail === [] || item === 'cancle') {
      // 모달로 넘어감
      return;
    }
    sendSelectedCocktails(item);
    // 로그인이 된 유저라면? 바로 추천 페이지,
    if ((user = null)) {
      navigation.navigate('logInStack');
    }
    navigation.navigate('recomandedCard');
  };

  const onPressCancle = () => {};
  // 그러면은 여기서 만약에 클릭이된 버튼의 카테고리가 wien 이면 와인에 등록이 되겠지.
  // 그럼 이제 이거를 프롭스로 보내줄때 비교할만한거를 찾으면 됨. 지금 이게 클릭된거에서 왔으니까
  //

  const resetFilteredCocktails = () => {
    setFilteredCocktails(totalCocktails);
  };

  const filterCategory = category => {
    const filtered = cocktails.filter(obj => {
      return obj.categoryName === category;
    });
    const data = filtered[0].cocktails;
    setFilteredCocktails(data);
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
      {!isLoading && (
        <View style={styles.categoryContainer}>
          <ScrollView horizontal={true}>
            <View
              style={
                isSelected === null
                  ? styles.selectedCategory
                  : styles.categoryBtnContainer
              }>
              <TouchableOpacity
                onPress={() => {
                  resetFilteredCocktails();
                  setIsSelected(null);
                }}>
                <Text
                  style={
                    isSelected === null
                      ? styles.selectedCategoryTitle
                      : styles.categoryTitle
                  }>
                  전체
                </Text>
              </TouchableOpacity>
            </View>
            {cocktails.map((item, index) => {
              return (
                <CategoryBtn
                  key={index}
                  item={item}
                  filterCategory={filterCategory}
                  isSelect={item.categoryName === isSelected}
                  handleSelected={handleSelected}
                />
              );
            })}
          </ScrollView>
        </View>
      )}
      <View style={styles.allCocktailContainer}>
        <FlatList
          data={filteredCocktails}
          renderItem={({item}) => {
            return (
              <BridgeCard
                item={item}
                handleSelectedCocktail={handleSelectedCocktail}
              />
            );
          }}
          numColumns={3}
        />
      </View>
      <View style={styles.selecBtnContainer}>
        <TouchableOpacity onPress={onPressNextOrCancle}>
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
    backgroundColor: null,
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
    flex: 1,
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
  },
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

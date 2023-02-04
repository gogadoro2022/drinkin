import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {SafeArea} from '../../../component/util/SafeArea';

// 2월3일
// 여기서 모달로 넘어갈때는 여기서 필요한 데이터 같은걸 가져갈 수 있겠지
// 그래서 모달창에서 전체 데이터를 리퀘스트 해와도 여기서 가져간 특정 데이터를 활용해서 UI만듬

export default function CocktailDetail({navigation, route}) {
  console.log(route.params.item.params.recomanded);

  const {
    cocktailName,
    cocktailEnglishName,
    cocktailDescription,
    base,
    skill,
    tool,
    glass,
    abv,
    level,
    sugarContent,
    recipe,
  } = route.params.item.params.recomanded;

  return (
    <SafeArea>
      <ScrollView style={styles.fullContainer}>
        <View style={styles.titleContainer}>
          <Image source={require('../../../img/mainCocktail.png')} />
          <Text>{cocktailName}</Text>
          <Text>{cocktailEnglishName}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text>{cocktailDescription}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text>{base}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>레시피</Text>
          <Text>{recipe}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>정보</Text>
          <View style={styles.lineContainer}>
            <Text style={styles.key}>{`도   구`}</Text>
            <TouchableOpacity
              style={styles.valueContainer}
              onPress={() => navigation.navigate('tool')}>
              <Text>{tool}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lineContainer}>
            <Text style={styles.key}>{`기   법`}</Text>
            <TouchableOpacity
              style={styles.valueContainer}
              onPress={() => navigation.navigate('skill')}>
              <Text>{skill}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lineContainer}>
            <Text style={styles.key}>글라스</Text>
            <TouchableOpacity
              style={styles.valueContainer}
              onPress={() => navigation.navigate('glass')}>
              <Text>{glass}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lineContainer}>
            <Text style={styles.key}>{`도   수`}</Text>
            <TouchableOpacity
              style={styles.valueContainer}
              onPress={() => navigation.navigate('abv')}>
              <Text>{abv}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lineContainer}>
            <Text style={styles.key}>난이도</Text>
            <View style={styles.valueContainer}>
              <Text>{level}</Text>
            </View>
          </View>
          <View style={styles.lineContainer}>
            <Text style={styles.key}>{`당   도`}</Text>
            <View style={styles.valueContainer}>
              <Text>{sugarContent}</Text>
            </View>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>팁과 콘텐츠</Text>
        </View>
      </ScrollView>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  fullContainer: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 43,
  },
  titleContainer: {
    alignItems: 'center',
  },
  descriptionContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  infoContainer: {
    marginTop: 40,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 30,
    color: 'black',
  },
  lineContainer: {
    flexDirection: 'row',
  },
  key: {},
  valueContainer: {
    marginLeft: 16,
    borderWidth: 2,
    borderColor: '#e7e7e7',
    borderRadius: 4,
    backgroundColor: '#F7F7F7',
    width: 71,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {},
});

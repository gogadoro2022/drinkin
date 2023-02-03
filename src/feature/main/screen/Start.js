import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeArea} from '../../../component/util/SafeArea';

export const Start = ({navigation}) => {
  return (
    <SafeArea>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../img/Groupdrink.png')}
        />
      </View>
      <View style={styles.MainContainer}>
        <Image source={require('../../../img/mainCocktail.png')} />
        <Text style={styles.MainText}>마셔봤던 칵테일을 선택하고</Text>
        <Text style={styles.MainText}>다양한 칵테일을 추천 받아 보세요</Text>
        <TouchableOpacity
          style={styles.MainBtn}
          onPress={() => navigation.navigate('selectCocktail')}>
          <Text style={styles.MainBtnText}>시작하기</Text>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    marginTop: 15,
    marginBottom: 15,
  },
  MainContainer: {
    alignItems: 'center',
  },
  MainText: {
    alignItems: 'center',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 25.5,
    color: 'black',
  },
  MainBtn: {
    backgroundColor: 'black',
  },
  MainBtnText: {
    color: '#e7e7e7',
    fontWeight: '400',
    fontSize: 15,
  },
});

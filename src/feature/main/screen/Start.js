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
      <View style={styles.mainContainer}>
        <View style={styles.backContainer}>
          <Image source={require('../../../img/mainBackground.png')} />
        </View>
        <View style={styles.StartContainer}>
          <Image source={require('../../../img/mainCocktail.png')} />
          <Text style={styles.StartText}>마셔봤던 칵테일을 선택하고</Text>
          <Text style={styles.StartText}>다양한 칵테일을 추천 받아 보세요</Text>
          <TouchableOpacity
            style={styles.StartBtn}
            onPress={() => navigation.navigate('selectCocktail')}>
            <Text style={styles.StartBtnText}>시작하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    height: 52,
  },
  logo: {
    marginTop: 15,
    marginBottom: 15,
  },
  mainContainer: {},
  backContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  StartContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  StartText: {
    alignItems: 'center',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 25.5,
    color: 'black',
  },
  StartBtn: {
    backgroundColor: 'black',
  },
  StartBtnText: {
    color: '#e7e7e7',
    fontWeight: '400',
    fontSize: 15,
  },
});

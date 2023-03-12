import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeArea} from '../../../component/util/SafeArea';
import {FlatList} from 'react-native-gesture-handler';
import CocktailCard from '../../cocktail/component/CocktailCard';

export default function Recomand({navigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const [recomandedCocktail, setRecomandedCocktail] = useState([]);
  // const {recomanded, isLoading} = useContext(RecomandedContext);

  // const navigateCocktailDetail = i => {
  //   navigation.navigate('cocktailDetailScreen', {restaurant : i});
  // };

  // api로 받아옴
  // const retreive = async () => {
  //   await recomandedCocktailRequest
  //     .then(res => {
  //       console.log('추천 칵테일 받아옴');
  //       setRecomandedCocktail(res);
  //     })
  //     .catch(err => console.error(`ERR ${err}`));
  // };

  return (
    <SafeArea>
      <View>
        <View style={styles.logoContainer}>
          <Text>DRINK IN</Text>
        </View>
        <View style={styles.cardListContainer}>
          <FlatList
            horizontal={true}
            data={recomandedCocktail}
            renderItem={({item}) => {
              return <CocktailCard recomanded={item} navigation={navigation} />;
            }}
          />
        </View>
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    height: 52,
  },
  cardListContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
    padding: 8,
  },
});

import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeArea} from '../../../component/util/SafeArea';
import {RecomandedContext} from '../../../service/recomanded/recomanded.context';
import {FlatList} from 'react-native-gesture-handler';
import CocktailCard from '../../cocktail/component/CocktailCard';

export default function Recomand({navigation}) {
  const {recomanded, isLoading} = useContext(RecomandedContext);

  // const navigateCocktailDetail = i => {
  //   navigation.navigate('cocktailDetailScreen', {restaurant : i});
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
            data={recomanded}
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

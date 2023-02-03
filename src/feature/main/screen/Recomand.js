import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeArea} from '../../../component/util/SafeArea';
import {RecomandedContext} from '../../../service/recomanded/recomanded.context';
import {FlatList} from 'react-native-gesture-handler';
import {CocktailStackScreen} from '../../../infra/navigation/CocktailStackScreen';
import CocktailCard from '../../../component/cocktail/CocktailCard';

export default function Recomand({navigation}) {
  const {recomanded, isLoading} = useContext(RecomandedContext);

  const navigateCocktailDetail = () => {
    navigation.navigate('cocktailDetailScreen', {recomanded});
  };

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
              return (
                <CocktailCard recomanded={item} nav={navigateCocktailDetail} />
              );
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

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeArea} from '../util/SafeArea';

export default function CocktailDetail(props) {
  console.log('props : ', props);

  const {navigation} = props;

  return (
    <SafeArea>
      <View>
        <Text>(이미지 오는곳)</Text>
        <Text>타이틀</Text>
      </View>
      <View>
        <Text>필요한 재료</Text>
        <TouchableOpacity
          style={styles.liquorContainer}
          onPress={() => navigation.navigate('liquor')}>
          <Text>베이스</Text>
          <Text>버번위스키</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>재료</Text>
          <Text>버번위스키</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>가니쉬</Text>
          <Text>버번위스키</Text>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  liquorContainer: {},
});

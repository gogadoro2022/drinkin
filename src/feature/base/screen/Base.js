import React from 'react';
import {SafeArea} from '../../../component/util/SafeArea';

export default function Base() {
  const {
    baseName = '스카치 위스키',
    baseEngName = 'Scotch Whiskey',
    BaseDescription = '디스크립션',
  } = undefined;

  return (
    <SafeArea>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{baseName}</Text>
        <Text style={styles.engTitle}>{baseEngName}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text>{BaseDescription}</Text>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>스카이 위스키 종류</Text>
        <Text style={styles.listSubTitle}>
          리스트에 없는 모델도 지속적으로 추가 예정
        </Text>
      </View>
    </SafeArea>
  );
}

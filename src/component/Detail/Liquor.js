import React from 'react';
import {Text} from 'react-native';
import {SafeArea} from '../util/SafeArea';

export default function Liquor() {
  const mockData = {
    img: '',
    title: '짐 빌',
    englishTitle: 'Jim Beam',
    category: '버번 위스키',
    abv: '40%',
    placeOfPurchase: ['편의점', '데일리샷 픽업 주문', '대형 마트'],
    price: ['200ml 기준 1만원대', '750ml 기준 3만원대'],
  };

  return (
    <SafeArea>
      <Text>짐빌</Text>
    </SafeArea>
  );
}

import React from 'react';
import {View} from 'native-base';
import {StyleSheet} from 'react-native';

export default function SpaceLine() {
  return <View style={s.wrap} />;
}

const s = StyleSheet.create({
  wrap: {minHeight: 5, backgroundColor: '#ddd'},
});

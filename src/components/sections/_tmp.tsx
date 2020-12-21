import React from 'react';
import {Text, View} from 'native-base';
import {StyleSheet} from 'react-native';

export default function TMP() {
  return (
    <View style={s.wrap}>
      <Text>asdasdas</Text>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: {minHeight: 100},
});

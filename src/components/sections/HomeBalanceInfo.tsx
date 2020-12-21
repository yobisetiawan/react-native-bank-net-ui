import React from 'react';
import {Text, View} from 'native-base';
import {StyleSheet} from 'react-native';
import {colorWhite, fontSmall, fontStrong} from '../../helper/theme';

export default function HomeBalanceInfo() {
  return (
    <View style={s.wrap}>
      <Text style={colorWhite}>Cash</Text>
      <Text style={[s.balance, colorWhite]}>Rp 10.000.000</Text>
      <Text style={[fontSmall, colorWhite]}>
        NET Point <Text style={[fontStrong, colorWhite]}>50.000</Text>
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: {
    minHeight: 120,
    paddingHorizontal: 20,
  },
  balance: {
    fontWeight: '700',
    fontSize: 18,
    marginVertical: 5,
  },
});

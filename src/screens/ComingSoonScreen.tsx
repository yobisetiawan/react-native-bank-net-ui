import {Text, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {colorSecondary, textCenter} from '../helper/theme';

const ComingSoonScreen = () => {
  return (
    <View style={s.wrap}>
      <Text style={[textCenter, colorSecondary]}>
        Sabar ya, ini semua biar kamu bisa nikmatin berbagai layanan terbaik
        dari NET syariah
      </Text>
    </View>
  );
};

export default ComingSoonScreen;

const s = StyleSheet.create({
  wrap: {padding: 30, flex: 1, alignItems: 'center', justifyContent: 'center'},
});

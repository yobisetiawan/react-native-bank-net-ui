import React from 'react';
import {Icon, Text, View} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colorPrimary, flex1, fontSmall, fontStrong} from '../../helper/theme';

export default function HomeUpgradeInfo() {
  return (
    <TouchableOpacity style={s.wrap}>
      <View style={s.ic1}>
        <Icon name="rocket1" type="AntDesign" style={colorPrimary} />
      </View>
      <View style={flex1}>
        <Text style={[fontStrong, colorPrimary]}>Upgrade ke NET Premier</Text>
        <Text style={fontSmall}>Dapatkan lebih banyak keuntung</Text>
      </View>
      <Icon name="right" type="AntDesign" style={[s.icr, colorPrimary]} />
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 13,
    borderRadius: 8,
    marginBottom: 15,
  },
  ic1: {marginHorizontal: 10, paddingRight: 10},
  icr: {fontSize: 14},
});

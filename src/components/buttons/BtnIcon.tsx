import React from 'react';
import {Icon, Text} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colorPrimary} from '../../helper/theme';

export default function BtnIcon({
  label,
  IC,
  onPress,
}: {
  label: string;
  IC: {name: string; type: 'AntDesign' | 'Ionicons'};
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={s.wrap}>
      <Icon name={IC.name} type={IC.type} style={colorPrimary} />
      <Text style={[s.label, colorPrimary]}>{label}</Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  wrap: {alignItems: 'center'},
  label: {fontSize: 11, marginTop: 4},
});

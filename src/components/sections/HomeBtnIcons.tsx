import React from 'react';
import {View} from 'native-base';
import BtnIcon from '../buttons/BtnIcon';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function HomeBtnIcons() {
  const nav = useNavigation();
  return (
    <View style={s.wrap}>
      <BtnIcon
        label="Top Up"
        IC={{name: 'pluscircleo', type: 'AntDesign'}}
        onPress={() => {
          nav.navigate('TopUp');
        }}
      />
      <BtnIcon
        label="Transfer"
        IC={{name: 'export', type: 'AntDesign'}}
        onPress={() => {
          nav.navigate('Transfer');
        }}
      />
      <BtnIcon
        label="History"
        IC={{name: 'clockcircleo', type: 'AntDesign'}}
        onPress={() => {
          nav.navigate('History');
        }}
      />
    </View>
  );
}

const s = StyleSheet.create({
  wrap: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    minHeight: 80,
    marginTop: -30,
    elevation: 1,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

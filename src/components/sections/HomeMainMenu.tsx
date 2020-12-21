import React from 'react';
import {Text, View} from 'native-base';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {fontSmall, textCenter} from '../../helper/theme';

const pln = require('../../assets/images/menu/flash.png');
const pulsa = require('../../assets/images/menu/smartphone.png');
const game = require('../../assets/images/menu/gamepad.png');
const pdam = require('../../assets/images/menu/drop.png');
const bpjs = require('../../assets/images/menu/shield.png');
const tv = require('../../assets/images/menu/smart-tv.png');
const umbrella = require('../../assets/images/menu/umbrella.png');
const other = require('../../assets/images/menu/menu.png');

export default function HomeMainMenu() {
  return (
    <View style={s.wrap}>
      <TouchableOpacity style={s.child}>
        <Image source={pln} style={s.ic} />
        <View style={s.label}>
          <Text style={[fontSmall, textCenter]}>PLN </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={s.child}>
        <Image source={pulsa} style={s.ic} />
        <View style={s.label}>
          <Text style={[fontSmall, textCenter]}>Pulsa </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={s.child}>
        <Image source={game} style={s.ic} />
        <View style={s.label}>
          <Text style={[fontSmall, textCenter]}>Voucer Game</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={s.child}>
        <Image source={pdam} style={s.ic} />
        <View style={s.label}>
          <Text style={[fontSmall, textCenter]}>PDAM </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={s.child}>
        <Image source={bpjs} style={s.ic} />
        <View style={s.label}>
          <Text style={[fontSmall, textCenter]}>BPJS </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={s.child}>
        <Image source={umbrella} style={s.ic} />
        <View style={s.label}>
          <Text style={[fontSmall, textCenter]}>Proteksi </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={s.child}>
        <Image source={tv} style={s.ic} />
        <View style={s.label}>
          <Text style={[fontSmall, textCenter]}>Internet & TV Kabel </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={s.child}>
        <Image source={other} style={s.ic} />
        <View style={s.label}>
          <Text style={[fontSmall, textCenter]}>Lainnya </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 25,
  },
  child: {width: '25%', alignItems: 'center', marginBottom: 20},
  ic: {width: 32, height: 32},
  label: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

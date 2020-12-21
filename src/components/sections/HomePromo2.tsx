import React from 'react';
import {Text, View} from 'native-base';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {
  colorPrimary,
  colorSecondary,
  colorWhite,
  flex1,
  fontSmall,
  PrimaryColor,
  textCenter,
} from '../../helper/theme';

function Item() {
  return (
    <View style={s.item}>
      <Text style={[colorWhite, textCenter]}>Keuntungan Pakai NET</Text>
    </View>
  );
}

export default function HomePromo2() {
  return (
    <View style={s.wrap}>
      <View style={s.title_wrap}>
        <View style={flex1}>
          <Text style={s.title}>Kenali NET Lebih Dekat</Text>
          <Text style={[fontSmall, colorSecondary]}>
            Biar makin akrab yuk cek tips berikut
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={[fontSmall, colorPrimary]}>Tutup</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        decelerationRate={'fast'}
        snapToAlignment={'center'}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.sc}>
        <Item />
        <Item />
        <Item />
        <Item />
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: {paddingTop: 30, paddingBottom: 30},
  title_wrap: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {fontSize: 20, fontWeight: '700'},
  item: {
    borderRadius: 8,
    backgroundColor: PrimaryColor,
    height: 200,
    width: 150,
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 20,
    elevation: 3,
  },
  sc: {paddingHorizontal: 15},
});

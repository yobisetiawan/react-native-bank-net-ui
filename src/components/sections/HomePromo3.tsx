import React from 'react';
import {Text, View} from 'native-base';
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {
  colorPrimary,
  colorSecondary,
  flex1,
  fontSmall,
} from '../../helper/theme';

function Item() {
  return (
    <View style={s.item}>
      <View style={s.itemBox}>
        <View style={s.imgTopWrap}>
          <ImageBackground
            source={{
              uri: 'https://dummyimage.com/600x400/e6530d/ffffff&text=img1',
            }}
            style={s.imgTop}
          />
        </View>
        <View style={s.bodyCard}>
          <Text>Pusat Bantuan</Text>
          <View style={s.cardContent}>
            <Text style={[fontSmall]}>
              Punya Kendala atau pertanyaan terkai NET? kamu bisa kirim disini.
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={[colorPrimary, fontSmall]}>Lihat Bantuan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function HomePromo3() {
  return (
    <View style={s.wrap}>
      <View style={s.title_wrap}>
        <View style={flex1}>
          <Text style={s.title}>Yang Menarik di NET</Text>
          <Text style={[fontSmall, colorSecondary]}>
            Jangan ngaku update kalau belum cobain fitur ini
          </Text>
        </View>
      </View>

      <View style={s.itemWrap}>
        <Item />
        <Item />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: {paddingTop: 30, paddingBottom: 30, marginBottom: 30},
  title_wrap: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {fontSize: 20, fontWeight: '700'},
  itemWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 15,
  },
  item: {
    width: '50%',
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  itemBox: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 2,
  },
  imgTopWrap: {
    height: 100,
  },
  imgTop: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  bodyCard: {
    padding: 15,
  },
  cardContent: {minHeight: 70, paddingTop: 10},
});

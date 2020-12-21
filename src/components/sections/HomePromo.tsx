import React from 'react';
import {Text, View} from 'native-base';
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {colorPrimary, flex1, fontSmall, PrimaryColor} from '../../helper/theme';
import {ScrollView} from 'react-native-gesture-handler';

const {width} = Dimensions.get('screen');

function Item() {
  return (
    <View style={s.itemWrap}>
      <View style={s.itemBG}>
        <ImageBackground
          source={{
            uri: 'https://dummyimage.com/600x400/e6530d/ffffff&text=img1',
          }}
          style={s.bgimg}
        />
      </View>
    </View>
  );
}

export default function HomePromo() {
  return (
    <View style={s.wrap}>
      <View style={s.title_wrap}>
        <View style={flex1}>
          <Text style={s.title}>Info dan Promo Spesial</Text>
        </View>
        <TouchableOpacity>
          <Text style={[fontSmall, colorPrimary]}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        pagingEnabled
        decelerationRate={'fast'}
        snapToInterval={width}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        snapToAlignment={'center'}>
        <Item />
        <Item />
        <Item />
        <Item />
      </ScrollView>

      <View style={s.dotsWrap}>
        <View style={s.dotInactive} />
        <View style={s.dotInactive} />
        <View style={s.dotActive} />
        <View style={s.dotInactive} />
        <View style={s.dotInactive} />
      </View>
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
  bgimg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  itemWrap: {
    width: width,
    height: 150,
  },
  itemBG: {
    flex: 1,
    marginHorizontal: 20,
    borderRadius: 5,
    overflow: 'hidden',
  },
  dotsWrap: {
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dotActive: {
    backgroundColor: PrimaryColor,
    width: 15,
    height: 7,
    borderRadius: 5,
    margin: 2,
  },
  dotInactive: {
    backgroundColor: '#ddd',
    width: 10,
    height: 7,
    borderRadius: 5,
    margin: 2,
  },
});

import {Container, H3, View} from 'native-base';
import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import MainHeader from '../components/headers/MainHeader';
import Spacer from '../components/other/Spacer';
import {
  bgBody,
  colorSecondary,
  flex1,
  fontStrong,
  textCenter,
} from '../helper/theme';

const bg_fix = require('../assets/images/fix.jpg');

const FinanceScreen = () => {
  return (
    <Container>
      <MainHeader title="Finance" />
      <View style={[bgBody, flex1]}>
        <View style={s.wrap}>
          <Image source={bg_fix} style={s.img} />
          <View style={s.text}>
            <H3 style={[textCenter, fontStrong]}>Kita lagi nyiapin sesuatu</H3>
            <Spacer height={10} />
            <Text style={[textCenter, colorSecondary]}>
              Sabar ya, ini semua biar kamu bisa nikmatin berbagai layanan
              terbaik dari NET syariah
            </Text>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default FinanceScreen;

const s = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  img: {width: 380, height: 200, resizeMode: 'contain'},
  text: {maxWidth: 300},
});

import {useNavigation} from '@react-navigation/native';
import {Button, Container, Content, Input, Item, Text} from 'native-base';
import React from 'react';
import {Dimensions, Image, StatusBar, StyleSheet, View} from 'react-native';
import Spacer from '../components/other/Spacer';
import {
  alignCenter,
  bgBody,
  bgPrimary,
  colorPrimary,
  colorSecondary,
  colorWhite,
  fontSmall,
  fontStrong,
  PrimaryColor,
  textCenter,
} from '../helper/theme';

const logo = require('../assets/images/logo.jpg');
const {height} = Dimensions.get('screen');

const AuthLoginScreen = () => {
  const nav = useNavigation();

  return (
    <Container>
      <StatusBar backgroundColor={PrimaryColor} barStyle="light-content" />
      <Content style={bgBody}>
        <View style={[s.bgTop, bgPrimary]}>
          <Spacer height={height * 0.4} />
        </View>
        <View style={s.wrap}>
          <View style={s.form}>
            <Spacer height={30} />
            <View style={alignCenter}>
              <Image source={logo} style={s.logo} fadeDuration={0} />
            </View>
            <Spacer height={30} />
            <Item regular style={s.formcontrol}>
              <Input placeholder="User ID" />
            </Item>
            <Item regular style={s.formcontrol}>
              <Input placeholder="Password" secureTextEntry />
            </Item>
            <Spacer height={30} />
            <Button
              primary
              block
              rounded
              style={bgPrimary}
              onPress={() => {
                nav.reset({
                  index: 0,
                  routes: [{name: 'Dashboard'}],
                });
              }}>
              <Text style={[fontStrong, colorWhite]}>Login</Text>
            </Button>
            <Spacer height={10} />
            <Button
              block
              rounded
              bordered
              onPress={() => {
                nav.navigate('Register');
              }}>
              <Text style={[fontStrong, colorPrimary]}>Sign Up</Text>
            </Button>
          </View>
        </View>
        <Text style={[textCenter, colorSecondary, fontSmall, s.padd10]}>
          Design By Yobi Bina Setiawan
        </Text>
      </Content>
    </Container>
  );
};

export default AuthLoginScreen;

const s = StyleSheet.create({
  wrap: {minHeight: height - 120, justifyContent: 'center'},
  formcontrol: {
    marginBottom: 15,
    backgroundColor: 'white',
    elevation: 1,
    borderRadius: 5,
  },
  form: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 8,
    elevation: 3,
  },
  padd10: {padding: 10},
  bgTop: {position: 'absolute', top: 0, left: 0, right: 0},
  logo: {width: 200, height: 100, resizeMode: 'contain'},
});

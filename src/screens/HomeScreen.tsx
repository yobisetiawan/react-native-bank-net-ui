import React, {useEffect, useState} from 'react';
import {Body, Container, Content, Header, Right, Title} from 'native-base';
import {Image, StyleSheet, Text, View} from 'react-native';
import HomeBtnIcons from '../components/sections/HomeBtnIcons';
import {bgPrimary, PrimaryColor} from '../helper/theme';
import HomeBalanceInfo from '../components/sections/HomeBalanceInfo';
import HomeUpgradeInfo from '../components/sections/HomeUpgradeInfo';
import HomeMainMenu from '../components/sections/HomeMainMenu';
import SpaceLine from '../components/other/SpaceLine';
import HomePromo from '../components/sections/HomePromo';
import HomePromo2 from '../components/sections/HomePromo2';
import HomePromo3 from '../components/sections/HomePromo3';
import BtnNotification from '../components/buttons/BtnNotification';

const bg_header = require('../assets/images/headertop1.png');

const HomeScreen = () => {
  const [isReady, SetReady] = useState(false);
  useEffect(() => {
    SetReady(true);
  }, []);

  return (
    <Container>
      <Header
        androidStatusBarColor={PrimaryColor}
        iosBarStyle="light-content"
        style={bgPrimary}>
        <Body>
          <Title style={s.title}>
            NET <Text style={s.title2}>Syariah</Text>
          </Title>
        </Body>
        <Right>
          <BtnNotification />
        </Right>
      </Header>
      <Content>
        <Image source={bg_header} style={s.imgTop} fadeDuration={0} />
        <HomeBalanceInfo />
        <View style={s.content}>
          <HomeBtnIcons />
          <HomeUpgradeInfo />
          <HomeMainMenu />
        </View>
        {isReady && (
          <>
            <SpaceLine />
            <HomePromo />
            <SpaceLine />
            <HomePromo2 />
            <SpaceLine />
            <HomePromo3 />
          </>
        )}
      </Content>
    </Container>
  );
};

export default HomeScreen;

const s = StyleSheet.create({
  title: {fontWeight: '700', fontSize: 25, paddingLeft: 10},
  title2: {fontSize: 18, fontWeight: '400'},
  imgTop: {position: 'absolute', top: 0, left: 0, right: 0},
  content: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});

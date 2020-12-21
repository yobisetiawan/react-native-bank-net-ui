import React from 'react';
import {Body, Header, Right, Title} from 'native-base';
import {StyleSheet} from 'react-native';
import {bgPrimary, PrimaryColor} from '../../helper/theme';
import BtnNotification from '../buttons/BtnNotification';

export default function MainHeader({title}: {title: string}) {
  return (
    <Header
      androidStatusBarColor={PrimaryColor}
      iosBarStyle="light-content"
      style={bgPrimary}>
      <Body>
        <Title style={s.title}>{title}</Title>
      </Body>
      <Right>
        <BtnNotification />
      </Right>
    </Header>
  );
}

const s = StyleSheet.create({
  title: {fontWeight: '700', paddingLeft: 8},
});

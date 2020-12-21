import {Tab, TabHeading, Tabs, Text, View} from 'native-base';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {flex1, PrimaryColor} from '../helper/theme';

const no_pesan = require('../assets/images/no_pesan.jpg');
const no_notif = require('../assets/images/no_notif.jpg');

const NotificationScreen = () => {
  return (
    <Tabs>
      <Tab
        heading={
          <TabHeading style={{backgroundColor: PrimaryColor}}>
            <Text>Notifikasi</Text>
          </TabHeading>
        }>
        <View style={flex1}>
          <View style={s.wrap}>
            <Image source={no_notif} style={s.img} />
          </View>
        </View>
      </Tab>
      <Tab
        heading={
          <TabHeading style={{backgroundColor: PrimaryColor}}>
            <Text>Pesan</Text>
          </TabHeading>
        }>
        <View style={flex1}>
          <View style={s.wrap}>
            <Image source={no_pesan} style={s.img} />
          </View>
        </View>
      </Tab>
    </Tabs>
  );
};

export default NotificationScreen;

const s = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  img: {width: 380, height: 380, resizeMode: 'contain'},
});

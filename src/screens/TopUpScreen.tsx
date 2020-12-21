import {Tab, TabHeading, Tabs, View, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {flex1, PrimaryColor} from '../helper/theme';

const TopUpScreen = () => {
  return (
    <Tabs>
      <Tab
        heading={
          <TabHeading style={{backgroundColor: PrimaryColor}}>
            <Text>Instan Top Up</Text>
          </TabHeading>
        }>
        <View style={flex1}>
          <View style={s.wrap} />
        </View>
      </Tab>
      <Tab
        heading={
          <TabHeading style={{backgroundColor: PrimaryColor}}>
            <Text>Metode Lain</Text>
          </TabHeading>
        }>
        <View style={flex1}>
          <View style={s.wrap} />
        </View>
      </Tab>
    </Tabs>
  );
};

export default TopUpScreen;

const s = StyleSheet.create({
  wrap: {},
});

import React, {useEffect, useState} from 'react';
import {Container, Content, Icon, Input, Item, View} from 'native-base';
import {StyleSheet} from 'react-native';
import MainHeader from '../components/headers/MainHeader';
import {bgBody, colorSecondary} from '../helper/theme';
import HomePromo from '../components/sections/HomePromo';
import HomePromo2 from '../components/sections/HomePromo2';
import HomeUpgradeInfo from '../components/sections/HomeUpgradeInfo';

const DealScreen = () => {
  const [isReady, SetReady] = useState(false);
  useEffect(() => {
    SetReady(true);
  }, []);

  return (
    <Container>
      <MainHeader title="Deals" />
      <View style={s.top}>
        <Item regular style={s.formSearch}>
          <Input placeholder="Cari Merchant" />
        </Item>
        <View style={s.ml5}>
          <Icon type="AntDesign" name="tag" style={colorSecondary} />
        </View>
      </View>
      {isReady && (
        <Content style={bgBody}>
          <View style={s.wrap}>
            <HomePromo />
            <View style={s.px5}>
              <HomeUpgradeInfo />
            </View>
            <HomePromo2 />
          </View>
        </Content>
      )}
    </Container>
  );
};

export default DealScreen;

const s = StyleSheet.create({
  top: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  wrap: {backgroundColor: 'white', marginTop: 4, paddingBottom: 30},
  ml5: {marginLeft: 15},
  px5: {paddingHorizontal: 15},
  formSearch: {
    flex: 1,
    borderRadius: 8,
    paddingLeft: 10,
    height: 40,
    backgroundColor: '#f2f2f2',
  },
});

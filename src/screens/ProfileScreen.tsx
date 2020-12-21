import {useNavigation} from '@react-navigation/native';
import {Button, Container, Content, Icon} from 'native-base';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainHeader from '../components/headers/MainHeader';
import ListIcon from '../components/list/ListIcon';
import ProfileUserImage from '../components/sections/ProfileUserImage';
import {
  bgBody,
  bgPrimary,
  colorSecondary,
  colorWhite,
  fontSmall,
  fontStrong,
} from '../helper/theme';

const ProfileScreen = () => {
  const [isReady, SetReady] = useState(false);
  useEffect(() => {
    SetReady(true);
  }, []);
  return (
    <Container>
      <MainHeader title="Profile" />
      {isReady && <MainContent />}
    </Container>
  );
};

function MainContent() {
  const nav = useNavigation();

  return (
    <Content style={bgBody}>
      <View style={s.wrap}>
        <ProfileUserImage />

        <Text style={s.title}>Akun</Text>
        <ListIcon
          onPress={() => {
            nav.navigate('ComingSoon');
          }}>
          <ListIcon.Left>
            <Icon type="AntDesign" name="user" />
          </ListIcon.Left>
          <ListIcon.Body>
            <Text>Ubah Profile</Text>
          </ListIcon.Body>
          <ListIcon.Right>
            <Icon type="AntDesign" name="right" style={fontSmall} />
          </ListIcon.Right>
        </ListIcon>
        <ListIcon
          onPress={() => {
            nav.navigate('ComingSoon');
          }}>
          <ListIcon.Left>
            <Icon type="EvilIcons" name="credit-card" />
          </ListIcon.Left>
          <ListIcon.Body>
            <Text>My Cards</Text>
          </ListIcon.Body>
          <ListIcon.Right>
            <Icon type="AntDesign" name="right" style={fontSmall} />
          </ListIcon.Right>
        </ListIcon>
        <ListIcon
          onPress={() => {
            nav.navigate('ComingSoon');
          }}>
          <ListIcon.Left>
            <Icon type="AntDesign" name="tagso" />
          </ListIcon.Left>
          <ListIcon.Body>
            <Text>Kode Promo</Text>
          </ListIcon.Body>
          <ListIcon.Right>
            <Icon type="AntDesign" name="right" style={fontSmall} />
          </ListIcon.Right>
        </ListIcon>
      </View>
      <View style={s.wrap}>
        <Text style={s.title}>Keamanan</Text>
        <ListIcon
          onPress={() => {
            nav.navigate('ComingSoon');
          }}>
          <ListIcon.Left>
            <Icon type="AntDesign" name="lock" />
          </ListIcon.Left>
          <ListIcon.Body>
            <Text>Ubah Security Code</Text>
          </ListIcon.Body>
          <ListIcon.Right>
            <Icon type="AntDesign" name="right" style={fontSmall} />
          </ListIcon.Right>
        </ListIcon>
      </View>
      <View style={s.wrap}>
        <Text style={s.title}>Tentang</Text>
        <ListIcon
          onPress={() => {
            nav.navigate('WebView');
          }}>
          <ListIcon.Left>
            <Icon type="AntDesign" name="staro" />
          </ListIcon.Left>
          <ListIcon.Body>
            <Text>Keuntungan Pakai NET</Text>
          </ListIcon.Body>
          <ListIcon.Right>
            <Icon type="AntDesign" name="right" style={fontSmall} />
          </ListIcon.Right>
        </ListIcon>

        <ListIcon
          onPress={() => {
            nav.navigate('WebView');
          }}>
          <ListIcon.Left>
            <Icon type="Entypo" name="open-book" />
          </ListIcon.Left>
          <ListIcon.Body>
            <Text>Panduan NET</Text>
          </ListIcon.Body>
          <ListIcon.Right>
            <Icon type="AntDesign" name="right" style={fontSmall} />
          </ListIcon.Right>
        </ListIcon>

        <ListIcon
          onPress={() => {
            nav.navigate('WebView');
          }}>
          <ListIcon.Left>
            <Icon type="Feather" name="book-open" />
          </ListIcon.Left>
          <ListIcon.Body>
            <Text>Syarat dan Ketentuan</Text>
          </ListIcon.Body>
          <ListIcon.Right>
            <Icon type="AntDesign" name="right" style={fontSmall} />
          </ListIcon.Right>
        </ListIcon>

        <ListIcon
          onPress={() => {
            nav.navigate('WebView');
          }}>
          <ListIcon.Left>
            <Icon type="Ionicons" name="shield-checkmark-outline" />
          </ListIcon.Left>
          <ListIcon.Body>
            <Text>Syarat dan Ketentuan</Text>
          </ListIcon.Body>
          <ListIcon.Right>
            <Icon type="AntDesign" name="right" style={fontSmall} />
          </ListIcon.Right>
        </ListIcon>

        <ListIcon
          onPress={() => {
            nav.navigate('WebView');
          }}>
          <ListIcon.Left>
            <Icon type="Feather" name="help-circle" />
          </ListIcon.Left>
          <ListIcon.Body>
            <Text>Pusat Bantuan</Text>
          </ListIcon.Body>
          <ListIcon.Right>
            <Icon type="AntDesign" name="right" style={fontSmall} />
          </ListIcon.Right>
        </ListIcon>
      </View>

      <View style={s.version}>
        <Text style={[fontSmall, colorSecondary]}>Vestion 1.0</Text>
        <Text style={[fontStrong, fontSmall]}>#pakaiNETaja</Text>
      </View>

      <View style={s.btnSignOut}>
        <Button
          primary
          block
          rounded
          style={bgPrimary}
          onPress={() => {
            nav.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
          }}>
          <Text style={[fontStrong, colorWhite, s.fontBtn]}>Sign Out</Text>
        </Button>
      </View>
    </Content>
  );
}

export default ProfileScreen;

const s = StyleSheet.create({
  wrap: {paddingTop: 20, marginBottom: 5, backgroundColor: 'white'},
  title: {paddingLeft: 20, fontWeight: '700', marginBottom: 5},
  version: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  icSmall: {fontSize: 22},
  fontBtn: {fontSize: 18},
  btnSignOut: {paddingHorizontal: 10, marginBottom: 40},
});

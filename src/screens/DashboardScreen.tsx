import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';

import {
  HomeScreen,
  DealScreen,
  ProfileScreen,
  FinanceScreen,
  QRScreen,
} from './index';
import {PrimaryColor, SecondaryColor} from '../helper/theme';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function DashboardScreen() {
  const nav = useNavigation();
  const tabIcon = (
    ic: string,
    ty_ic: 'Foundation' | 'AntDesign' | 'FontAwesome' | 'FontAwesome5',
  ) => {
    return {
      tabBarIcon: ({color}: {color: string}) => {
        let gcolor = {color: ic === 'scan1' ? 'white' : color};
        return <Icon type={ty_ic} name={ic} style={gcolor} />;
      },
    };
  };

  return (
    <>
      <View style={[s.centerIconWrap, s.centerIconWrap2]}>
        <View style={[s.centerIcon, s.centerIcon2]} />
      </View>
      <View style={s.centerIconWrap}>
        <TouchableWithoutFeedback
          onPress={() => {
            nav.navigate('QRScreen');
          }}
          style={s.centerIcon}>
          <Icon type="AntDesign" name="scan1" style={s.scan} />
        </TouchableWithoutFeedback>
      </View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: PrimaryColor,
          inactiveTintColor: SecondaryColor,
          style: s.no_shadow,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={tabIcon('home', 'Foundation')}
        />
        <Tab.Screen
          name="Deals"
          component={DealScreen}
          options={tabIcon('cookie-bite', 'FontAwesome5')}
        />
        <Tab.Screen
          name="Scan"
          component={QRScreen}
          options={tabIcon('scan1', 'AntDesign')}
        />

        <Tab.Screen
          name="Finance"
          component={FinanceScreen}
          options={tabIcon('money', 'FontAwesome')}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={tabIcon('user-circle-o', 'FontAwesome')}
        />
      </Tab.Navigator>
    </>
  );
}

const s = StyleSheet.create({
  qr_wrap: {
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    padding: 3,
    top: -12,
  },
  qr_wrap_in: {
    backgroundColor: PrimaryColor,
    borderRadius: 50,
    alignItems: 'center',
    padding: 10,
  },
  white: {color: 'white'},
  no_shadow: {
    height: 60,
    paddingTop: 8,
    paddingBottom: 10,
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
  },
  centerIconWrap: {
    position: 'absolute',
    left: '50%',
    zIndex: 100,
    bottom: 0,
    height: 80,
    width: 70,
    marginLeft: -35,
    alignItems: 'center',
  },
  centerIconWrap2: {zIndex: 1, height: 81},
  centerIcon: {
    backgroundColor: PrimaryColor,
    alignItems: 'center',
    borderRadius: 50,
    height: 60,
    width: 60,
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'white',
  },
  centerIcon2: {borderColor: '#ddd'},
  scan: {color: 'white', fontSize: 34},
});

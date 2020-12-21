import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import {
  DashboardScreen,
  QRScreen,
  NotificationScreen,
  RegisterScreen,
  LoginScreen,
  TopUpScreen,
  TransferScreen,
  HistoryScreen,
  WebviewScreen,
  ImagePickerScreen,
  ComingSoonScreen,
} from './src/screens';
import {fontStrong, PrimaryColor} from './src/helper/theme';
import BootSplash from 'react-native-bootsplash';

const Stack = createStackNavigator();

const opt1 = {headerShown: false};
const headerStyle = {
  backgroundColor: PrimaryColor,
  elevation: 0,
  shadowOpacity: 0,
};
const opt2 = {
  headerStyle,
  headerTintColor: '#fff',
  headerTitleStyle: fontStrong,
};

let fakeApiCallWithoutBadNetwork = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default function App() {
  let init = async () => {
    // You can uncomment this line to add a delay on app startup
    await fakeApiCallWithoutBadNetwork(2000);
    await BootSplash.hide({fade: true});
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <Stack.Screen name="Login" component={LoginScreen} options={opt1} />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={opt1}
          />
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={opt1}
          />
          <Stack.Screen
            name="Notifications"
            component={NotificationScreen}
            options={opt2}
          />
          <Stack.Screen name="TopUp" component={TopUpScreen} options={opt2} />
          <Stack.Screen
            name="Transfer"
            component={TransferScreen}
            options={opt2}
          />
          <Stack.Screen
            name="History"
            component={HistoryScreen}
            options={opt2}
          />
          <Stack.Screen name="QRScreen" component={QRScreen} options={opt1} />
          <Stack.Screen
            name="ComingSoon"
            component={ComingSoonScreen}
            options={opt2}
          />
          <Stack.Screen
            name="WebView"
            component={WebviewScreen}
            options={opt2}
          />
          <Stack.Screen
            name="ImagePicker"
            component={ImagePickerScreen}
            options={opt2}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

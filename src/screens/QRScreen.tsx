import React, {useEffect, useState} from 'react';
import {StyleSheet, Linking, View, Alert} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

function CameraScreen() {
  const onSuccess = (e: any) => {
    Alert.alert(
      'QR Code Data',
      e.data.toString(),
      [
        {
          text: 'OK',
          onPress: () => {
            Linking.openURL(e.data).catch((err) =>
              console.error('An error occured', err),
            );
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <QRCodeScanner
      reactivate={true}
      reactivateTimeout={2000}
      onRead={onSuccess}
    />
  );
}

function QRScreen() {
  const [isReady, SetReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      SetReady(true);
    }, 400);
  }, []);
  return (
    <View style={s.wrap}>
      {isReady && <CameraScreen />}
      <View style={s.box}>
        <View style={s.line1} />
        <View style={s.line2} />
        <View style={s.line3} />
        <View style={s.line4} />
        <View style={s.line5} />
        <View style={s.line6} />
        <View style={s.line7} />
        <View style={s.line8} />
      </View>
    </View>
  );
}

export default QRScreen;
const s = StyleSheet.create({
  wrap: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    position: 'absolute',
    width: 240,
    height: 240,
    left: '50%',
    marginLeft: -120,
    top: '50%',
    marginTop: -120,
  },
  line1: {
    position: 'absolute',
    width: 60,
    height: 6,
    top: 0,
    left: 0,
    backgroundColor: 'white',
  },
  line2: {
    position: 'absolute',
    width: 6,
    height: 60,
    top: 0,
    left: 0,
    backgroundColor: 'white',
  },
  line3: {
    position: 'absolute',
    width: 60,
    height: 6,
    top: 0,
    right: 0,
    backgroundColor: 'white',
  },
  line4: {
    position: 'absolute',
    width: 6,
    height: 60,
    top: 0,
    right: 0,
    backgroundColor: 'white',
  },
  line5: {
    position: 'absolute',
    width: 60,
    height: 6,
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
  },
  line6: {
    position: 'absolute',
    width: 6,
    height: 60,
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
  },
  line7: {
    position: 'absolute',
    width: 60,
    height: 6,
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
  },
  line8: {
    position: 'absolute',
    width: 6,
    height: 60,
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
  },
});

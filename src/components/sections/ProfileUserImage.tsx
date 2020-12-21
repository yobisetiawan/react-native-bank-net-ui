import React, {useState} from 'react';
import {Text, Thumbnail, View} from 'native-base';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import ImagePicker from 'react-native-image-picker';

const sample_img =
  'https://yobi-studio.com/wp-content/uploads/2020/12/192509_3636304561183_1710507589_o-2.jpg';

export default function ProfileUserImage() {
  const [img, SetImg] = useState(sample_img);
  return (
    <View style={s.wrap}>
      <TouchableOpacity
        onPress={() => {
          const options2 = {};
          ImagePicker.launchImageLibrary(options2, (response) => {
            // Same code as in above section!
            console.log(response);
            if (response.uri) {
              SetImg(response.uri);
            }
          });
        }}
        style={s.thumbnail_wrap}>
        <Thumbnail large source={{uri: img}} />
      </TouchableOpacity>
      <Text style={s.name}>Yobi Bina Setiawan</Text>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: {
    minHeight: 100,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail_wrap: {marginBottom: 8},
  name: {textAlign: 'center', fontWeight: '700'},
});

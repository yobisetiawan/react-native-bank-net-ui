import {Button, Text, View} from 'native-base';
import React from 'react';
import ImagePicker from 'react-native-image-picker';

const ImagePickerScreen = () => {
  return (
    <View>
      <Button
        onPress={() => {
          const options1 = {};
          ImagePicker.launchCamera(options1, (response) => {
            // Same code as in above section!
            console.log(response);
          });
        }}>
        <Text>Launch Camera</Text>
      </Button>
      <Button
        onPress={() => {
          const options2 = {};
          ImagePicker.launchImageLibrary(options2, (response) => {
            // Same code as in above section!
            console.log(response);
          });
        }}>
        <Text> Open Image Library</Text>
      </Button>
    </View>
  );
};

export default ImagePickerScreen;

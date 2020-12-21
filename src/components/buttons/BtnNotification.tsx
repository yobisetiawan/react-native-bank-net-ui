import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, Icon} from 'native-base';

export default function BtnNotification() {
  const nav = useNavigation();
  return (
    <Button
      transparent
      onPress={() => {
        nav.navigate('Notifications');
      }}>
      <Icon name="notifications" />
    </Button>
  );
}

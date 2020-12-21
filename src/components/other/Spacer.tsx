import React from 'react';
import {View} from 'native-base';

export default function Spacer({height}: {height: number}) {
  return <View style={{height: height}} />;
}

import React, {Children} from 'react';
import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import {flex1} from '../../helper/theme';

export default function ListIcon({
  onPress,
  children,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) {
  let _left, _body, _right;

  Children.forEach(children, (child: any) => {
    if (child.type === LeftIcon) {
      return (_left = child);
    }

    if (child.type === ListBody) {
      return (_body = child);
    }

    if (child.type === RightIcon) {
      return (_right = child);
    }
  });

  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple('rgba(0,0,0,0.1)')}>
      <View style={s.wrap}>
        {_left}
        {_body}
        {_right}
      </View>
    </TouchableNativeFeedback>
  );
}

interface INode {
  children: React.ReactNode;
}

const LeftIcon = ({children}: INode) => <View style={s.left}>{children}</View>;
const ListBody = ({children}: INode) => <View style={flex1}>{children}</View>;
const RightIcon = ({children}: INode) => (
  <View style={s.right}>{children}</View>
);

ListIcon.Left = LeftIcon;
ListIcon.Body = ListBody;
ListIcon.Right = RightIcon;

const s = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 50,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  left: {width: 60, alignItems: 'center'},
  right: {width: 50, alignItems: 'center'},
});

import React from 'react';
import { View, Text } from 'react-native';

import Style from './style';

export default function Comp() {
  return (
    <View style={Style.container}>
      <Text style={Style.txtG}>Comp #Oficial</Text>
    </View>
  );
}

export function Comp1() {
  return (
    <View style={Style.container}>
      <Text style={Style.txtG}>Comp #01</Text>
    </View>
  );
}

export function Comp2() {
  return (
    <View style={Style.container}>
      <Text style={Style.txtG}>Comp #02</Text>
    </View>
  );
}

import React from 'react';
import {View, Text} from 'react-native';

import Style from './style';

export default () => {
  return (
    <View style={Style.container}>
      <Text style={Style.txtG}>Primeiro componente</Text>
    </View>
  );
};

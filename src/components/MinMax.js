import React from 'react';
import { View, Text } from 'react-native';

import Style from './style';

export default (params) => {
    console.warn(params)
  return (
    <View style={Style.container}>
      <Text style={Style.txtG}>O valor {params.max} é maior que o valor {params.min}</Text>
    </View>
  );
};

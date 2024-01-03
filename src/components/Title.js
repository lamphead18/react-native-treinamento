import React from 'react';
import {View, Text} from 'react-native';
import Style from './style';

export default props => {
  return (
    <View style={Style.container}>
      <Text style={Style.txtG}>{props.primary}</Text>
      <Text style={Style.txtG}>{props.secondary}</Text>
    </View>
  );
};
 
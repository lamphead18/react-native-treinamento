import React from 'react';
import { StyleSheet, SafeAreaView, Text} from 'react-native';

import CompPadrao, { Comp1, Comp2 } from './components/Multi'
import Primeiro from './components/Primeiro';

export default () => (
  <SafeAreaView style={style.App}>
    <Primeiro />
    <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Text>AAAAAAAAAAAAAAAAA</Text>
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#7B543B',
  },
});

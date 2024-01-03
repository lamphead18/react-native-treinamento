import React from 'react';
import { StyleSheet, SafeAreaView, Text} from 'react-native';

// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
import Primeiro from './components/Primeiro';
import Title from './components/Title';
// import MinMax from './components/MinMax';
import Botao from './components/Botao';


export default () => (
  <SafeAreaView style={style.App}>
    <Title primary="Cadastro Produto" secondary="Tela de Cadastro"/>
    <Botao />
    <Primeiro/>
    {/* <MinMax min='3' max='20' />
    <CompPadrao />
    <Comp1 />
    <Comp2 /> */}
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#6508D7',
  },
});

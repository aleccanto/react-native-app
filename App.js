import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';

/**
 * Trabalho de React Native
 *
 * Demonstração:
 *  https://snack.expo.io/Tk4_2jb4L
 * @author Álec
 */

const App = () => {
  return (
    <View style={style.containerExterno}>
      <StatusBar hidden={true} />
      <View style={style.linhaSuperior} />
      <View style={style.containerInterno}>
        <View style={style.boxSuperior}>
          <View />
          <View style={style.quadrado} />
          <View style={style.retangulo} />
          <View />
        </View>
        <View style={style.boxCentral}>
          <View style={style.duasLinhas}>
            <View style={style.meiaLinhaRoxa} />
            <View style={style.meiaLinhaAzul} />
          </View>
          <View>
            <View style={style.linhaCentral} />
          </View>
        </View>
        <View style={style.boxInferior}>
          <View style={style.quadradoHorizontal}>
            <View style={style.quadrado} />
            <View style={style.quadrado} />
            <View style={style.quadrado} />
          </View>
          <View style={style.quadradoHorizontal}>
            <View style={style.quadrado} />
            <View style={style.quadrado} />
            <View style={style.quadrado} />
          </View>
        </View>
      </View>
      <View style={style.linhaInferior} />
    </View>
  );
};

const style = StyleSheet.create({
  containerExterno: {
    flex: 1,
  },
  linhaSuperior: {
    width: '100%',
    height: 25,
    backgroundColor: '#50E3C2',
  },
  containerInterno: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  linhaInferior: {
    width: '100%',
    height: 60,
    backgroundColor: '#4A90E2',
  },
  linhaCentral: {
    width: '100%',
    height: 13,
    backgroundColor: '#50E3C2',
  },
  quadradoHorizontal: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  duasLinhas: {
    flexDirection: 'row',
  },
  boxSuperior: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  boxInferior: {
    flex: 1,
    width: '100%',
    alignContent: 'space-around',
  },
  boxCentral: {
    justifyContent: 'center',
  },
  quadrado: {
    width: 100,
    height: 100,
    backgroundColor: '#F5A623',
  },
  retangulo: {
    width: 200,
    height: 30,
    backgroundColor: '#F5A623',
  },
  meiaLinhaRoxa: {
    width: '50%',
    height: 78,
    backgroundColor: '#9013FE',
  },
  meiaLinhaAzul: {
    width: '50%',
    height: 78,
    backgroundColor: '#4A90E2',
  },
});

export default App;


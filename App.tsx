import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#FFFFFF');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]; // generate number from 1 to 16
    }

    setRandomBackground(color);
  };

  const Square = () => {
    return <View style={styles.square}></View>;
  };

  const Circle = () => {
    return <View style={styles.circle}></View>;
  };

  const Triangle = () => {
    return <View style={styles.triangle}></View>;
  };

  const Rectangle = () => {
    return <View style={styles.rectangle}></View>;
  };
  return (
    <>
      <StatusBar backgroundColor={randomBackground} />

      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <View style={styles.upperLowerContainer}>
          <Square />
          <Circle />
        </View>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.upperLowerContainer}>
          <Triangle />
          <Rectangle />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },

  actionBtnTxt: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  upperLowerContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'red',
    marginTop: 10,
  },
  triangle: {
    // using only the border properties
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
    marginLeft: 50,
    // transform: [{rotate: '180deg'}], // for rotating upside down
  },
  rectangle: {
    width: 100 * 2,
    height: 100,
    backgroundColor: 'red',
    marginTop: 10,
  },
});

export default App;

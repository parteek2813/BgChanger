import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Exstyles from './style';
export default function App1() {
  const [name, setName] = useState('Hello');

  function TestName() {
    setName('Parteek');
  }

  const animal = {
    eats: 'yes',
    drink: 'no',
  };
  return (
    <View>
      <Text>{name}</Text>
      <Button title="updateName" onPress={() => TestName()}>
        Hello
      </Button>
      <User animal={animal} />
    </View>
  );
}

const User = (props: {animal: {eats: any; drink: any}}) => {
  const {eats, drink} = props.animal;
  const [nameInput, setNameInput] = useState('');

  return (
    <View>
      <Text style={{fontSize: 30}}>{eats} </Text>
      <Text style={{fontSize: 30}}>{drink} </Text>
      <Text style={(Exstyles.textBox, {marginTop: 20})}>
        Your name is: {nameInput}
      </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setNameInput(text)}
        value={nameInput}
        placeholder="Enter your name"
      />
      <Button title="clear input value" onPress={() => setNameInput('')} />
    </View>
  );
};

// Interview: validation on input box
const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    color: 'red',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
  },
});

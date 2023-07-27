import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Exstyles from './style';
export default function App1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  const resetFormData = () => {
    setName('');
    setEmail('');
    setPassword('');
    setDisplay(false);
  };

  const togglePasswordVisible = () => {
    setIsSecureTextEntry(!isSecureTextEntry);
  };

  return (
    <View>
      <Text style={{fontSize: 30}}> Simple Form in React Native</Text>
      <View>
        <Text>Enter your name</Text>
        <TextInput placeholder="name" onChangeText={text => setName(text)} />
      </View>
      <View>
        <Text>Enter your password</Text>
        <TextInput
          placeholder="password"
          secureTextEntry={isSecureTextEntry}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity onPress={togglePasswordVisible}>
          <Text> {isSecureTextEntry ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Enter your email</Text>
        <TextInput placeholder="email" onChangeText={text => setEmail(text)} />
      </View>

      <View style={{marginBottom: 10}}>
        <Button
          color={'green'}
          title="Print Details"
          onPress={() => setDisplay(true)}
        />
      </View>
      <Button title="clear Details" onPress={resetFormData} />

      <View>
        {display ? (
          <View>
            <Text style={{fontSize: 20}}>User Name is: {name}</Text>
            <Text style={{fontSize: 20}}>Password is: {password}</Text>
            <Text style={{fontSize: 20}}>User Email is: {email}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

// Interview: validation on input box
const styles = StyleSheet.create({});

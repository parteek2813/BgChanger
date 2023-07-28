import React, {Component} from 'react';
import {LogBox} from 'react-native';
import {
  Button,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Student from './Components/Student';

class App extends Component {
  fruit = () => {
    console.log('Apple');
  };

  render() {
    return (
      <View>
        <Text style={{fontSize: 30, color: 'red'}}>Class Component</Text>
        <TextInput placeholder="Enter your name" />
        <Button title="Press me" onPress={this.fruit} />
        <Student />
      </View>
    );
  }
}

export default App;

// Interview Question

// Question 1
// Should we use functional Component or Class Component?
// We can use both , but it recommended to use functional Component
// nowadays as compared to class Component. Let, const , var are not
// used in class Component

// Question 2
// Diff b/w class component and functional Component?

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

interface AppState {
  name: string;
  age: number;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props); // to call the parent class constructor.... i.e Component in this case

    this.state = {
      name: 'Parteek',
      age: 10,
    };
  }

  updateName(val: string) {
    this.setState({name: val});
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 30, color: 'red'}}>{this.state.name}</Text>
        <TextInput
          placeholder="Enter your name"
          onChangeText={text => this.updateName(text)}
        />
        <Button title="Press me" />
        <Student name={this.state.name} />
      </View>
    );
  }
}

export default App;

/*
// Interview Question

// Question 1
 Should we use functional Component or Class Component?

We can use both , but it recommended to use functional Component
 nowadays as compared to class Component. Let, const , var are not
 used in class Component

 // Question 2
 Diff b/w class component and functional Component?

 // Question 3
 How can we return in class Component?

 we can retunr in class Component using the render fn provided by the react native
 as we are not allowed to render in class component.

 Syntax: render() {
  return (
    <View> </View>
  )
 }

 // LIFe cycle Methods- 22 lec

 Question 1: Can we use life cycle methods in the functional component?
 Ans: We can use life cycle methods in the functional component through hooks

 Question 2: Phases of life cycle methods?
 Ans: 1) Mounting
 2) Updating
 3) Unmounting


 // Hooks - 23 lec
 Question 1: can we use Hooks in class components too?
 Ans: No, hooks are a feature introduced in React 16.8 that allows you to use state and other 
 React features in functional components. Hooks are not compatible with class components.

 
*/

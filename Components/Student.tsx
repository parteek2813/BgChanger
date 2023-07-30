import React, {Component} from 'react';
import {Text, View} from 'react-native';

interface StudentProps {
  name: string;
}

class Student extends Component<StudentProps> {
  render() {
    const {name} = this.props;
    return (
      <View>
        <Text style={{fontSize: 30, color: 'red'}}>Student Name: {name}</Text>
      </View>
    );
  }
}

export default Student;

/**
 * Interview Questions:
 *
 * Question 1: How we can make state in the class component?
 * Question 2: How we can update the value of the state?
 * Question 3: How we can use props in the class component and in its child component too? [this.props]
 * Question 4: How we can make functions in the class component?
 * Question 5: Use of super() keyword and constuctor declartion in class component?
 *
 *
 *  */

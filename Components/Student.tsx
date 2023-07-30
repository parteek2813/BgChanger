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

import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function App3() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {}, [toggle]);

  useEffect(() => {
    console.log('Hello');
  }, [count, data]);

  useEffect(() => {
    console.log('This will run once during mounting phase');
  }, []);

  return (
    <View>
      <Text>App3</Text>
      <Button title="updateCount" onPress={() => setCount(count + 1)} />
      <Button title="updateData" onPress={() => setData(data + 1)} />
      <Button title="toggle" onPress={() => setToggle(!toggle)} />

      <Text>{count}</Text>
      <Text>{data}</Text>
      <User data={data} count={count} />
      <Teacher toggle={toggle} />
    </View>
  );
}

interface UserProps {
  data: number;
  count: number;
}

const User: React.FC<UserProps> = props => {
  const {data, count} = props;
  console.log(data, count);

  useEffect(() => {
    console.log('run this wehn data prop is updated');
  }, [data]);

  useEffect(() => {
    console.log('run this wehn count prop is updated');
  }, [count]);

  return (
    <View>
      <Text>User Component</Text>
    </View>
  );
};

interface TeacherProps {
  toggle: boolean;
}
const Teacher: React.FC<TeacherProps> = props => {
  // VERY IMPORTANT
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('Timer called');
    }, 2000);
    return () => {
      clearInterval(timer); // clear the setTimeout when the unmount happens
    };
  }, []);
  const {toggle} = props;

  return (
    <View>
      {toggle && (
        <>
          <Text>Hello i am in teacher component</Text>
          <Text> Is it working</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

/**
 * How to use useEffect for mounting phase ?
 *
 * useEffect hook is commonly used to perform side effects in functional components.
 * When it comes to the mounting phase, the useEffect hook is used to execute code
 * after the component has been rendered on the screen. It mimics the functionality of
 * the lifecycle method componentDidMount from class components.
 *
 * If empty dependnency array is provided in useEffect then then it render
 * only once the mounting phase... and not run in any cases
 *
 * if [] array not provided, then render after every changes
 *
 *
 */

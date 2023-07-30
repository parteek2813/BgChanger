import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function App3() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  useEffect(() => {
    console.log('Hello');
  }, [count, data]);

  useEffect(() => {}, []);

  return (
    <View>
      <Text>App3</Text>
      <Button title="updateCount" onPress={() => setCount(count + 1)} />
      <Button title="updateData" onPress={() => setData(data + 1)} />

      <Text>{count}</Text>
      <Text>{data}</Text>
      <User data={data} count={count} />
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

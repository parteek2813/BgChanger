// import {Button, StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useState} from 'react';

// export default function App3() {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState(100);
//   const [toggle, setToggle] = useState(false);

//   useEffect(() => {}, [toggle]);

//   useEffect(() => {
//     console.log('Hello');
//   }, [count, data]);

//   useEffect(() => {
//     console.log('This will run once during mounting phase');
//   }, []);

//   return (
//     <View>
//       <Text>App3</Text>
//       <Button title="updateCount" onPress={() => setCount(count + 1)} />
//       <Button title="updateData" onPress={() => setData(data + 1)} />
//       <Button title="toggle" onPress={() => setToggle(!toggle)} />

//       <Text>{count}</Text>
//       <Text>{data}</Text>
//       <User data={data} count={count} />
//       <Teacher toggle={toggle} />
//     </View>
//   );
// }

// interface UserProps {
//   data: number;
//   count: number;
// }

// const User: React.FC<UserProps> = props => {
//   const {data, count} = props;
//   console.log(data, count);

//   useEffect(() => {
//     console.log('run this wehn data prop is updated');
//   }, [data]);

//   useEffect(() => {
//     console.log('run this wehn count prop is updated');
//   }, [count]);

//   return (
//     <View>
//       <Text>User Component</Text>
//     </View>
//   );
// };

// interface TeacherProps {
//   toggle: boolean;
// }
// const Teacher: React.FC<TeacherProps> = props => {
//   // VERY IMPORTANT
//   // useEffect(() => {
//   //   let timer = setInterval(() => {
//   //     console.log('Timer called');
//   //   }, 2000);
//   //   return () => {
//   //     clearInterval(timer); // clear the setTimeout when the unmount happens
//   //   };
//   // });

//   const {toggle} = props;

//   return (
//     <View>
//       {toggle && (
//         <>
//           <Text>Hello i am in teacher component</Text>
//           <Text> Is it working</Text>
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// /**
//  * How to use useEffect for mounting phase ?
//  *
//  * useEffect hook is commonly used to perform side effects in functional components.
//  * When it comes to the mounting phase, the useEffect hook is used to execute code
//  * after the component has been rendered on the screen. It mimics the functionality of
//  * the lifecycle method componentDidMount from class components.
//  *
//  * If empty dependnency array is provided in useEffect then then it render
//  * only once the mounting phase... and not run in any cases
//  *
//  * if [] array not provided, then render after every changes
//  *
//  *
//  */

// FLEX BOX
// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// export default function App3() {
//   return (
//     <View style={styles.main}>
//       <Text style={styles.box1}></Text>
//       <Text style={styles.box2}></Text>
//       <Text style={styles.box3}></Text>
//       <Text style={styles.box4}></Text>
//       <Text style={styles.box5}></Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     backgroundColor: 'orange',
//     flexDirection: 'row',
//   },
//   box1: {
//     flex: 2,
//     backgroundColor: 'red ',
//   },
//   box2: {
//     flex: 1,
//     backgroundColor: 'green',
//   },
//   box3: {
//     flex: 1,
//     backgroundColor: 'black',
//   },
//   box4: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   box5: {
//     flex: 1,
//     backgroundColor: 'green',
//   },
// });

// STYLE BUTTON

import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';

export default function App3() {
  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={[styles.button, styles.true]}>True</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.false]}>False</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.true1]}>False</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.false1]}>False</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {flex: 1},
  button: {
    backgroundColor: '#bbb',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    shadowColor: 'red',
    elevation: 10,
    shadowOpacity: 1,
  },
  true: {backgroundColor: 'green'},
  false: {backgroundColor: 'red'},
  true1: {backgroundColor: 'gray'},
  false1: {backgroundColor: 'black'},
});

/**
 * Interview QUestions:
 *
 * Question 1: What is alternative to style button in react native to use the styling too?
 * Ans. Touchable Highlight and Touchable Opacity are the two alternative to this.
 *
 *
 */

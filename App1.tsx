// import {
//   Button,
//   FlatList,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';
// import Exstyles from './style';

// type ItemData = {id: string; title: string};
// type ItemProps = {
//   item: ItemData;
//   onPress: () => void;
//   backgroundColor: string;
//   textColor: string;
// };

// // DATA
// const DATA: ItemData[] = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// // making a child component and taking the props
// const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
//     <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
//   </TouchableOpacity>
// );

// export default function App1() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [display, setDisplay] = useState(false);
//   const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
//   const [selectedId, setSelectedId] = useState<string>();

//   const resetFormData = () => {
//     setName('');
//     setEmail('');
//     setPassword('');
//     setDisplay(false);
//   };

//   const togglePasswordVisible = () => {
//     setIsSecureTextEntry(!isSecureTextEntry);
//   };

//   const renderItem = ({item}: {item: ItemData}) => {
//     const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
//     const color = item.id === selectedId ? 'white' : 'black';

//     return (
//       <Item
//         item={item}
//         onPress={() => setSelectedId(item.id)}
//         backgroundColor={backgroundColor}
//         textColor={color}
//       />
//     );
//   };

//   return (
//     <View>
//       <Text style={{fontSize: 30}}> Simple Form in React Native</Text>
//       <View>
//         <Text>Enter your name</Text>
//         <TextInput placeholder="name" onChangeText={text => setName(text)} />
//       </View>
//       <View>
//         <Text>Enter your password</Text>
//         <TextInput
//           placeholder="password"
//           secureTextEntry={isSecureTextEntry}
//           onChangeText={text => setPassword(text)}
//         />
//         <TouchableOpacity onPress={togglePasswordVisible}>
//           <Text> {isSecureTextEntry ? 'Show' : 'Hide'}</Text>
//         </TouchableOpacity>
//       </View>
//       <View>
//         <Text>Enter your email</Text>
//         <TextInput placeholder="email" onChangeText={text => setEmail(text)} />
//       </View>

//       <View style={{marginBottom: 10}}>
//         <Button
//           color={'green'}
//           title="Print Details"
//           onPress={() => setDisplay(true)}
//         />
//       </View>
//       <Button title="clear Details" onPress={resetFormData} />

//       <View>
//         {display ? (
//           <View>
//             <Text style={{fontSize: 20}}>User Name is: {name}</Text>
//             <Text style={{fontSize: 20}}>Password is: {password}</Text>
//             <Text style={{fontSize: 20}}>User Email is: {email}</Text>
//           </View>
//         ) : null}
//       </View>

//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         extraData={selectedId}
//         keyExtractor={item => item.id}></FlatList>
//     </View>
//   );
// }

// // Interview: validation on input box
// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// import {ScrollView, StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const Users = [
//   {
//     id: 1,
//     name: 'John',
//   },
//   {
//     id: 2,
//     name: 'John',
//   },
//   {
//     id: 4,
//     name: 'John',
//   },
//   {
//     id: 5,
//     name: 'John',
//   },
//   {
//     id: 6,
//     name: 'John',
//   },
//   {
//     id: 7,
//     name: 'John',
//   },
//   {
//     id: 8,
//     name: 'John',
//   },
//   {
//     id: 9,
//     name: 'John',
//   },
//   {
//     id: 10,
//     name: 'John',
//   },
//   {
//     id: 8,
//     name: 'John',
//   },
//   {
//     id: 9,
//     name: 'John',
//   },
//   {
//     id: 10,
//     name: 'John',
//   },
//   {
//     id: 8,
//     name: 'John',
//   },
//   {
//     id: 9,
//     name: 'John',
//   },
//   {
//     id: 10,
//     name: 'John',
//   },
//   {
//     id: 8,
//     name: 'John',
//   },
//   {
//     id: 9,
//     name: 'John',
//   },
//   {
//     id: 10,
//     name: 'John',
//   },
//   {
//     id: 8,
//     name: 'John',
//   },
//   {
//     id: 9,
//     name: 'John',
//   },
//   {
//     id: 10,
//     name: 'John',
//   },
// ];

// export default function App1() {
//   return (
//     <View>
//       <Text style={{fontSize: 32}}>Grid with dynamic View</Text>

//       <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
//         {Users.map(item => (
//           <Text style={styles.item}>{item.name}</Text>
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   item: {
//     fontSize: 25,
//     backgroundColor: 'blue',
//     color: 'white',
//     margin: 5,
//     padding: 5,
//     width: 120,
//     height: 120,
//     textAlign: 'center',
//     textAlignVertical: 'center',
//   },
// });

import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const Users = [
  {
    id: 1,
    name: 'John',
    email: 'a@b.com',
  },
  {
    id: 2,
    name: 'John',
    email: 'a@b.com',
  },
  {
    id: 3,
    name: 'John',
    email: 'a@b.com',
  },
];

const UserData = (props: any) => {
  const {item} = props;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};

export default function App1() {
  return (
    <View>
      <Text style={{fontSize: 32}}>Component in loop flatlist</Text>
      <FlatList
        data={Users}
        renderItem={({item}) => <UserData item={item} />}
      />
    </View>
  );
}

// Interview question: Can we use custom component in flatList?
// Yes, we can use custom component in flatList by making the seprate child component
// and then using the js map function, we can make the child component
// to be rendered at many items as we want

// Question 2
// Can we pass the multiple props too in the data?
// Yes, we can use them by making multiple props .
// in the JS, we can directly get the destructring from the object
// and in the typescript, we can declare the types of the props before
// and then use that props !!

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    color: 'orange',
    flex: 1,
    margin: 2,
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'orange',
    marginBottom: 10,
  },
});

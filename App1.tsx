import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Exstyles from './style';

type ItemData = {id: string; title: string};
type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

// DATA
const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

// making a child component and taking the props
const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function App1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [selectedId, setSelectedId] = useState<string>();

  const resetFormData = () => {
    setName('');
    setEmail('');
    setPassword('');
    setDisplay(false);
  };

  const togglePasswordVisible = () => {
    setIsSecureTextEntry(!isSecureTextEntry);
  };

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
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

      <FlatList
        data={DATA}
        renderItem={renderItem}
        extraData={selectedId}
        keyExtractor={item => item.id}></FlatList>
    </View>
  );
}

// Interview: validation on input box
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

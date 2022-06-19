import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import Input from './input';
import {Fruits, Fruit} from './data';
import Item from './listitem';

const App: FC = () => {
  const [fruits, setFruits] = useState<Fruit[] | null>(null);

  // console.log('ini data Fruits[]:', Fruits);

  useEffect(() => {
    setFruits(Fruits);
  }, []);

  const handleSearch = (text: string) => {
    text = text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
    const fruits: Fruit[] = Fruits.filter(fruit => {
      return fruit.name.includes(text);
    });
    console.log('ini kata yang diinput: ', text);

    console.log('ini buah difilter: ', fruits);

    setFruits(fruits);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome in typescript </Text>
      <Input
        icon="md-search"
        placeholder="Search"
        onChangeText={text => handleSearch(text)}
      />

      <FlatList
        style={{marginVertical: 10}}
        data={fruits}
        renderItem={({item}) => (
          <Item id={item.id} name={item.name} price={item.price} />
        )}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

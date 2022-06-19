import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Fruit} from './data';

const Item: FC<Fruit> = props => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{props.name}</Text>
      </View>
      <View>
        <Text>{props.price}</Text>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
    justifyContent: 'space-between',
    width: '70%',
  },

  listItem: {
    flex: 0.5,
    justifyContent: 'center',
  },
  item: {
    padding: 5,
    fontWeight: '600',
    fontSize: 16,
  },
});

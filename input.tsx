import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC} from 'react';

import Icon from 'react-native-vector-icons/dist/Ionicons';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

interface Props {
  icon: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

const Input: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Icon style={{padding: 5}} name={props.icon} size={22} color="#555" />
        <TextInput
          style={{
            padding: 5,
            borderBottomColor: '#ddd',
            width: '80%',
            borderBottomWidth: 1,
          }}
          placeholderTextColor="#555"
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',

    alignItems: 'center',
  },
});

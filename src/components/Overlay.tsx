import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Chat} from './Chat';
import {Content} from './Content';
import {Guide} from './Guide';

const options = [
  {
    label: 'Home',
    content: <Content />,
  },
  {
    label: 'Chat',
    content: <Chat />,
  },
  {
    label: 'Guide',
    content: <Guide />,
  },
];

export const Overlay = () => {
  const [content, setContent] = useState(options[0].content);

  return (
    <View style={styles.container}>
      <View style={styles.content}>{content}</View>
      <View style={styles.row}>
        {options.map((option, index) => {
          const selected = option.content === content;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => setContent(option.content)}>
              <Text style={selected ? styles.selectedButton : styles.button}>
                {option.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'gray',
  },
  selectedButton: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
  },
});

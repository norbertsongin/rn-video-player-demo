import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{content}</View>
      <View style={styles.row}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setContent(option.content)}>
            <Text style={styles.button}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    margin: 20,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
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
    color: 'white',
  },
});

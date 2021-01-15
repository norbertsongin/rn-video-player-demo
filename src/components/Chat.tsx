import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Chance from 'chance';

const chance = new Chance();

interface Message {
  author: string;
  text: string;
}

const createMessage = () => ({
  author: `${chance.name()}`,
  text: `${chance.sentence() + '😎'}`,
});

const initialMessages = [
  createMessage(),
  createMessage(),
  createMessage(),
  createMessage(),
  createMessage(),
  createMessage(),
];

export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const [text, setText] = useState('');

  const messagesContainer = useRef<ScrollView | null>();

  const pushFakeMessage = useCallback(() => {
    setMessages((currentMessages) => {
      return [...currentMessages, createMessage()];
    });
  }, []);

  const sendMessage = useCallback(() => {
    setMessages((currentMessages) => {
      return [
        ...currentMessages,
        {
          author: 'Me',
          text,
        },
      ];
    });
    setText('');
  }, [text]);

  useEffect(() => {
    const pushFakeMessageInterval = setInterval(pushFakeMessage, 500);

    return () => clearInterval(pushFakeMessageInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    messagesContainer.current?.scrollToEnd();
  }, [messages]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={50}>
      <View style={styles.messagesContainer}>
        <ScrollView ref={messagesContainer} scrollEnabled={false}>
          {messages.map((message, index) => (
            <Text key={index} style={styles.message}>
              <Text style={{fontWeight: 'bold'}}>{message.author}</Text>:{' '}
              <Text>{message.text}</Text>
            </Text>
          ))}
        </ScrollView>
      </View>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={setText}
          placeholder="Write a message."
          placeholderTextColor="white"
          selectionColor="white"
          returnKeyType="send"
          onSubmitEditing={sendMessage}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  messagesContainer: {
    flex: 0,
    maxHeight: 300,
  },
  message: {
    color: 'white',
    padding: 5,
  },
  textInputWrapper: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    marginTop: 20,
  },
  textInput: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
  },
});

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Chance from 'chance';
import {ScrollView} from 'react-native-gesture-handler';

const chance = new Chance();

const createMessage = () => `${chance.twitter()}: ${chance.sentence() + '😎'}`;

export const Chat = () => {
  const [messages, setMessages] = useState<string[]>([
    createMessage(),
    createMessage(),
    createMessage(),
    createMessage(),
    createMessage(),
    createMessage(),
  ]);

  const messagesContainer = useRef<ScrollView | null>();

  const pushNewMessage = useCallback(() => {
    setMessages((currentMessages) => {
      return [...currentMessages, createMessage()];
    });

    messagesContainer.current?.scrollToEnd();
  }, []);

  useEffect(() => {
    const pushNewMessageInterval = setInterval(pushNewMessage, 500);

    return () => clearInterval(pushNewMessageInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.chat}>
      <View style={styles.messagesContainer}>
        <ScrollView
          ref={messagesContainer}
          contentContainerStyle={styles.messages}
          scrollEnabled={false}>
          {messages.map((message, index) => (
            <Text key={index} style={styles.message}>
              {message}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chat: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  messagesContainer: {
    // flex: 1,
    // width: '100%',
    height: 200,
    // backgroundColor: 'green',
  },
  messages: {
    // flex: 1,
    // height: 200,
    // backgroundColor: 'blue',
    // alignSelf: 'flex-end',
    // justifyContent: 'flex-end',
  },
  message: {
    color: 'white',
    padding: 5,
  },
});

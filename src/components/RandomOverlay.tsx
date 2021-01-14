import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, SafeAreaView, Button, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AmazonPlayer} from '../components/AmazonPlayer';

export const RandomOverlay = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veniam,
        iure deleniti animi ea impedit architecto perferendis facere nisi libero
        officiis vel autem beatae! Corrupti quod placeat ea ipsum labore esse
        autem ipsa dolore eum vel quisquam doloribus, amet molestiae illo nemo
        dolorem necessitatibus ab voluptatibus? Ullam laboriosam quaerat odit
        autem quibusdam voluptatem quo omnis distinctio molestiae eveniet
        facilis dolorem accusantium, totam est enim ad mollitia eius eligendi in
        aspernatur, tempore blanditiis? Sint tempora vitae ut similique
        recusandae ex deleniti error, ipsam ratione quaerat neque et incidunt
        quisquam voluptatem delectus modi. Quasi mollitia saepe, optio sit culpa
        unde fugit perferendis?
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  text: {
    color: 'white',
  },
});

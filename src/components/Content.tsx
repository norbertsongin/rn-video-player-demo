import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Chance from 'chance';

const chance = new Chance();

export const Content = () => {
  const text = chance.sentence({words: 100});

  return <Text style={styles.contentText}>{text}</Text>;
};

const styles = StyleSheet.create({
  contentText: {
    color: 'white',
    fontSize: 20,
  },
});

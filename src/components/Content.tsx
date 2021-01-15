import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Chance from 'chance';

const chance = new Chance();

export const Content = () => {
  const text = chance.sentence({words: 100});

  return (
    <View style={styles.container}>
      <Text style={styles.contentText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentText: {
    color: 'white',
    fontSize: 20,
  },
});

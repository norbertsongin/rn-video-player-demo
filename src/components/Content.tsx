import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Chance from 'chance';
import {ScrollView} from 'react-native-gesture-handler';

const chance = new Chance();

export const Content = () => {
  const text = chance.sentence({words: 1000});

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.contentText}>{text}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  contentText: {
    color: 'white',
    fontSize: 20,
  },
});

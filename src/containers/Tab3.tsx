import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const Tab3 = () => {
  return (
    <View style={styles.container}>
      <Text>Tab 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

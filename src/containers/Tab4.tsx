import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const Tab4 = () => {
  return (
    <View style={styles.container}>
      <Text>Tab 4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

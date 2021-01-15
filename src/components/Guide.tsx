import React, {useEffect, useMemo, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Chance from 'chance';

const chance = new Chance();

interface Hour {
  hour: string;
  description: string;
}
interface Date {
  date: string;
  hours: Hour[];
}

const dates: Date[] = [];
for (let i = 0; i < 100; i++) {
  const hours = [];
  for (let j = 0; j < 100; j++) {
    hours.push({
      hour: `Hour ${j}`,
      description: chance.sentence({words: 10}),
    });
  }
  dates.push({
    date: `Date ${i}`,
    hours,
  });
}

export const Guide = () => {
  const datesList = useRef<FlatList<Date>>();
  const hoursList = useRef<FlatList<Hour>>();
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);

  const selectedDate = useMemo(() => dates[selectedDateIndex], [
    selectedDateIndex,
  ]);

  useEffect(() => {
    datesList.current?.scrollToIndex({index: selectedDateIndex});
    hoursList.current?.scrollToIndex({index: 0});
  }, [selectedDateIndex]);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          ref={datesList}
          data={dates}
          renderItem={({item, index}) => {
            const selected = index === selectedDateIndex;

            return (
              <TouchableOpacity
                style={selected ? styles.selectedDate : styles.date}
                onPress={() => {
                  setSelectedDateIndex(index);
                }}>
                <Text style={selected ? styles.selectedText : styles.text}>
                  {item.date}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.date}
          horizontal
        />
        {selectedDate && (
          <FlatList
            ref={hoursList}
            data={selectedDate.hours}
            renderItem={({item}) => (
              <View style={styles.date}>
                <Text style={styles.text}>{item.hour}</Text>
                <Text style={styles.text}>{item.description}</Text>
              </View>
            )}
            keyExtractor={(item) => item.hour}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  date: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    maxWidth: 200,
    height: 100,
  },
  selectedDate: {
    padding: 20,
    backgroundColor: 'white',
    maxWidth: 200,
    height: 100,
  },
  selectedText: {
    color: 'black',
    fontSize: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

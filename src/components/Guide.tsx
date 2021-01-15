import React, {useMemo, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Chance from 'chance';

const chance = new Chance();

interface Hour {
  id: string;
  hour: string;
  description: string;
}
interface Date {
  id: string;
  date: string;
  hours: Hour[];
}

const dates: Date[] = [];
for (let i = 0; i < 100; i++) {
  const hours = [];
  for (let j = 0; j < 100; j++) {
    hours.push({
      id: `${j}`,
      hour: `Hour ${j}`,
      description: chance.sentence({words: 10}),
    });
  }
  dates.push({
    id: `${i}`,
    date: `Date ${i}`,
    hours,
  });
}

export const Guide = () => {
  const datesList = useRef<FlatList<Date>>();
  const hoursList = useRef<FlatList<Hour>>();
  const [selectedDateId, setSelectedDateId] = useState(dates[0].id);

  const selectedDate = useMemo(
    () => dates.find((date) => date.id === selectedDateId),
    [selectedDateId],
  );

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          ref={datesList}
          data={dates}
          renderItem={({item}) => {
            const selected = item.id === selectedDateId;

            return (
              <TouchableOpacity
                style={selected ? styles.selectedDate : styles.date}
                onPress={() => {
                  hoursList.current?.scrollToIndex({index: 0});
                  setSelectedDateId(item.id);
                }}>
                <Text style={selected ? styles.selectedText : styles.text}>
                  {item.date}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id}
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
            keyExtractor={(item) => item.id}
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

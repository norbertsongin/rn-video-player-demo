import React, {useEffect, useState} from 'react';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Chance from 'chance';

// Instantiate Chance so it can be used
const chance = new Chance();

const text1 =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non assumenda, quo praesentium ipsa iure, mollitia eligendi quis maiores iste, ex nisi tempora atque dolor ea necessitatibus repellat nemo est excepturi in inventore vel. Quae necessitatibus enim eius culpa quidem optio praesentium, doloribus voluptatum error inventore assumenda minus ipsam repellendus. Qui distinctio eveniet et. Laboriosam temporibus nam, similique quas suscipit laborum nostrum perferendis molestiae quae asperiores cupiditate porro ad maiores quos adipisci rerum minima tenetur. Pariatur voluptas voluptates laborum corporis suscipit quae! Ducimus commodi, exercitationem perferendis voluptates cupiditate necessitatibus? Quidem cum quia ex reiciendis unde soluta ab ut eos modi!';
const text2 =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dicta illum nobis sed fugit quas eum architecto odio tempora voluptatem vel dolorem iure, maxime cum assumenda distinctio ab sunt quod pariatur cumque rerum quae vitae, possimus nulla? Beatae voluptates quas veniam impedit fugit unde debitis dolor iste, labore voluptatem illo sapiente rem, perspiciatis quis facilis placeat ad delectus accusamus suscipit atque! Eos laborum numquam, necessitatibus modi odio minus illo atque veniam praesentium dolorem animi repellat dolor officia. Placeat cum asperiores a ut corrupti at ex corporis rem molestiae laudantium accusamus nisi, facere quae, aliquid voluptas sint! Provident sed corporis repudiandae.';
const text3 =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error, nisi veritatis dignissimos ducimus adipisci voluptatem, accusamus facere maiores sint cum necessitatibus itaque aliquam! Dignissimos repudiandae nobis itaque totam maiores? Voluptatum minima quisquam quod hic impedit aut consectetur esse pariatur eos dolore facere delectus exercitationem ea, sint repellendus corrupti, vitae, enim necessitatibus! A distinctio consequuntur quas nisi recusandae praesentium nemo cupiditate itaque eligendi quos quo fuga aperiam laborum, doloribus modi blanditiis? Facilis repellat dolores earum? Rerum quidem iure voluptates id autem ullam assumenda mollitia saepe, maxime laudantium incidunt quaerat necessitatibus doloremque accusantium soluta illum hic quibusdam, omnis nisi nobis tempore.';

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([
    chance.sentence(),
    chance.sentence(),
    chance.sentence(),
  ]);

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setMessages([...messages, chance.sentence()]);
  //     }, 1000);

  //     return () => clearInterval(timer);
  //   }, []);

  return (
    <View style={styles.chat}>
      {messages.map((message, index) => (
        <Text key={index} style={styles.message}>
          {message}
        </Text>
      ))}
    </View>
  );
};

const Content1 = () => (
  <View>
    <Text style={styles.content}>{text1}</Text>
  </View>
);

const Content2 = () => (
  <View>
    <Text style={styles.content}>{text2}</Text>
  </View>
);

const Content3 = () => (
  <View>
    <Text style={styles.content}>{text3}</Text>
  </View>
);

const options = [
  {
    label: '+',
    // content: Chat,
    content: Content1,
  },
  {
    label: '@',
    content: Content2,
  },
  {
    label: '#',
    content: Content3,
  },
];

export const Overlay = () => {
  const [content, setContent] = useState(options[0].content);

  return (
    <SafeAreaView style={styles.container}>
      {content}
      <View style={styles.bottom}>
        <View style={styles.row}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setContent(option.content)}>
              <Text style={styles.button}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 50,
  },
  content: {
    color: 'white',
    fontSize: 30,
  },
  bottom: {
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // bottom: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 20,
    padding: 20,
    color: 'white',
  },
  message: {
    color: 'white',
    padding: 5,
  },
  chat: {
    position: 'absolute',
    bottom: 300,
    height: 200,
  },
});

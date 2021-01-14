import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, SafeAreaView, Button, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AmazonPlayer} from '../components/AmazonPlayer';
import {Overlay} from '../components/Overlay';
import {Player} from '../components/Player';

const url =
  'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8';
// const url =
//   'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.xhP3ExfcX8ON.m3u8';

export const PlayerTab = () => {
  // const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      {/* <AmazonPlayer url={url} /> */}
      {/* {isFocused && <Player url={url} />} */}
      <Player url={url} />
      <Overlay />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {AmazonPlayer} from '../components/AmazonPlayer';
import {Overlay} from '../components/Overlay';
import {Player} from '../components/Player';

const urls = [
  'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8',
  'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.xhP3ExfcX8ON.m3u8',
  'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
  'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
];

export const PlayerTab = () => {
  const [urlIndex, setUrlIndex] = useState(0);

  const url = urls[urlIndex];

  const nextUrl = () =>
    setUrlIndex((currentUrlIndex) =>
      currentUrlIndex < urls.length ? currentUrlIndex + 1 : 0,
    );

  return (
    <View style={styles.container}>
      <View style={styles.playerWrapper}>
        {/* <AmazonPlayer url={url} /> */}
        <Player url={url} />
      </View>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Button color="white" title="NEXT VIDEO" onPress={nextUrl} />
        </View>
        <Overlay />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  playerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    alignItems: 'flex-end',
  },
  overlay: {
    flex: 1,
  },
});

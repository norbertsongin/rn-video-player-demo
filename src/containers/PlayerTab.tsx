import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
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
  const [url, setUrl] = useState(urls[0]);

  useEffect(() => {
    const setUrlInterval = setInterval(() => {
      const randomIndex = Math.round(Math.random() * (urls.length - 1));
      setUrl(urls[randomIndex]);
    }, 10000);

    return () => clearInterval(setUrlInterval);
  }, []);

  return (
    <View style={styles.container}>
      {/* <AmazonPlayer url={url} /> */}
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

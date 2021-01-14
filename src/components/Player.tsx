import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';

interface Props {
  url: string;
}

export const Player = ({url}: Props) => {
  const [loading, setLoading] = useState(false);

  return (
    <View>
      <Video
        source={{uri: url}}
        style={styles.player}
        resizeMode="cover"
        muted
        onLoadStart={() => setLoading(true)}
        onLoad={() => setLoading(false)}
      />
      {loading && <Text style={styles.loading}>LOADING...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  player: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  loading: {
    color: 'white',
  },
});

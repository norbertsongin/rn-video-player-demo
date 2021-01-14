import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Button, SafeAreaView} from 'react-native';
import Video from 'react-native-video';

interface Props {
  url: string;
}

export const Player = ({url}: Props) => {
  const player = useRef();

  return (
    <View>
      <Video
        source={{uri: url}} // Can be a URL or a local file.
        // ref={player} // Store reference
        // onBuffer={this.onBuffer} // Callback when remote video is buffering
        // onError={this.videoError} // Callback when video cannot be loaded
        style={styles.player}
        muted
      />
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
});

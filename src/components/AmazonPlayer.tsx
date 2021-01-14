import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Button, SafeAreaView} from 'react-native';
import PlayerView from 'react-native-aws-ivs-player-view';

interface Props {
  url: string;
}

export const AmazonPlayer = ({url}: Props) => {
  const player = useRef<PlayerView | undefined>();

  useEffect(() => {
    player.current?.load(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <PlayerView style={styles.player} ref={player} />
    </View>
  );
};

const styles = StyleSheet.create({
  player: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
});

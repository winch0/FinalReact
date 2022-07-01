import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef, useContext} from 'react';
import {useCameraDevices, Camera} from 'react-native-vision-camera';

const Index = () => {
  const camera: any = useRef();

  const devices = useCameraDevices();
  console.log('====================================');
  console.log();
  console.log('====================================');
  const device = devices.front;

  if (device == null) return <Text>Loading</Text>;


  return (
    <>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    </>
  );
};

export default Index;
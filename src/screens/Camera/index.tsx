import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef, useContext} from 'react';
import {useCameraDevices, Camera} from 'react-native-vision-camera';

const Index = () => {
  const camera: any = useRef();

  const devices = useCameraDevices();
  const device = devices.front;

  if (device == null) return <Text>Loading</Text>;


  return (
    <>
      <Camera
        ref={camera}
        photo={true}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    </>
  );
};

export default Index;
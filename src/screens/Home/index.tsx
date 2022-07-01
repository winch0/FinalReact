import React, {useState,useEffect} from 'react'
import {SafeAreaView,Text,View,ScrollView,TouchableOpacity } from 'react-native';
import ListOfCards from '../../components/ListOfCards';
import {Camera} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';



const Index = () => {

const navigation: any = useNavigation();

return (
    <SafeAreaView>
    <ScrollView>
    <TouchableOpacity
          onPress={async () => {
            const newCameraPermission = await Camera.requestCameraPermission();
            const newMicrophonePermission =
              await Camera.requestMicrophonePermission();
            const cameraPermission = await Camera.getCameraPermissionStatus();
            const microphonePermission =
              await Camera.getMicrophonePermissionStatus();


            navigation.navigate('Camera');
          }}
          style={{
            backgroundColor: 'black',
            padding: 8,
            borderRadius: 5,
            width: '50%',
            alignItems: 'center',
            marginTop: 10,
            alignSelf: 'center',
          }}>
          <Text style={{color: 'white'}}>Fotografia y véndenos tu carta</Text>
        </TouchableOpacity>
        <ListOfCards />
    </ScrollView>
    </SafeAreaView>
    );
    };

export default Index;
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import  Camera  from '../screens/Camera';
import Checkout from '../screens/Checkout'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Camera"component={Camera} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
  );
}

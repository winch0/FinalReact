import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PaymentButton = () => {
  const navigation: any = useNavigation();

  return (
    <>
      
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: 'black',
            padding: 15,
            borderRadius: 10,
            margin: 7,
            marginHorizontal: 35,
          }}>
          <Text style={{color: 'white', fontSize: 19}}>Pagar</Text>
        </TouchableOpacity>
      
    </>
  );
};

export default PaymentButton;
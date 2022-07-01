import React, {useState, useContext} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import PokemonItem from '../../components/PokemonItem';
import {CartContext} from '../../navigation/Index';
import Button from '../../components/Button';
import PaymentButton from '../../components/PaymentButton/PaymentButton';

const Index = () => {
  const {cart, setCart}: any = useContext(CartContext);


  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        width: '100%',
      }}>
      {cart.map((item, index) => {
        return (
          <View key={item?.id}>
            <TouchableOpacity
              onPress={() => {
                const newArray = cart.filter(pokemonCardI => pokemonCardI != item);
                setCart(newArray);
              }}
              style={{
                backgroundColor: 'black',
                width: 30,
                position: 'absolute',
                zIndex: 1,
                top: 20,
                right: 0,
                borderTopRightRadius: 5,
              }}>
              <Text style={{color: 'white', fontSize: 25, textAlign: 'center'}}>
                X
              </Text>
            </TouchableOpacity>
            <PokemonItem pokemonCard={item} />
          </View>
        );
      })}

        <View style={{marginTop: 200}}>
          <Button text={'Regresar a la pagina de compra'} screenName={'Home'} />
        </View>
        <PaymentButton />
    </ScrollView>
    
  );
};

export default Index;
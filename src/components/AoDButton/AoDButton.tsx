import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const AddOrDeleteButtons = ({setCart, cart, pokemonCard}) => {

  
const areIn = cart.find(pokemonCardI=> pokemonCardI?.id == pokemonCard.id);


return (
    <View
    style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 20,
      }}>
      {areIn  ? (
        <TouchableOpacity
          onPress={() => {
            const newArray = cart.filter(
              pokemonCardI => pokemonCardI.id != pokemonCard.id,
            );
            setCart(newArray);
          }}
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            backgroundColor: '#dc2626',
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Delete Card</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            if (pokemonCard) setCart([...cart, pokemonCard]);
          }}
          style={{
            paddingHorizontal: 22,
            paddingVertical: 10,
            backgroundColor: '#16a34a',
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Buy Card</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddOrDeleteButtons;
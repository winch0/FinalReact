import {View,Text,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const PokemonItem = ({pokemonCard}) => {
  const navigation: any = useNavigation()
  return (
    <TouchableOpacity 
    onPress={()=>{
      navigation.navigate('Details',{pokemonCard});
    }}
    >
                    <View style={{alignItems: 'center'}}>
                    <Text style ={{marginTop: 8, fontSize:20,fontWeight:'800'}} >{pokemonCard.name}</Text>
                    <Image source={{uri:pokemonCard?.images.small}}
                            style={{height: 300, width: 300, borderRadius: 10}}
                    />
                    </View>
    </TouchableOpacity>
  );
}

export default PokemonItem;
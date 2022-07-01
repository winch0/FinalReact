import { View, Text, SafeAreaView,Image,ScrollView } from 'react-native'
import React,{useContext} from 'react'
import { useRoute } from '@react-navigation/native'
import  Button  from '../../components/Button'
import AoDButton from '../../components/AoDButton/AoDButton'
import {CartContext} from '../../navigation/Index';


const Index = () => {
    const route = useRoute();
    const pokemonCard = route?.params?.pokemonCard;
    const {cart, setCart}  = useContext(CartContext);

return (
    
    <SafeAreaView>
    <ScrollView>
    <View style={{alignItems:'center', padding: 20}}>
    <Image
    source={{uri:pokemonCard.images.small}}
    style={{height:600, width:400}}
    />
    <Text style={{marginTop: 8, fontSize:20,fontWeight:'800'}}>{pokemonCard.name}</Text>
    <Text style={{marginTop: 2, fontSize:15,fontWeight:'500'}}>Set: {pokemonCard.set.name}</Text>
    <Text style={{marginTop: 2, fontSize:15,fontWeight:'500'}}>Series: {pokemonCard.set.series}</Text>
    <Text style={{marginTop: 2, fontSize:15,fontWeight:'500'}}> Price: {pokemonCard.cardmarket.prices.averageSellPrice} $</Text>
    <Text style={{marginTop: 2, fontSize:15,fontWeight:'500'}}>{pokemonCard.rarity}</Text>
    </View>
    <AoDButton setCart={setCart} cart={cart} pokemonCard={pokemonCard} />
    <Button screenName={"Checkout"} text={"Ir a checkout"}></Button>
    
    </ScrollView>
    </SafeAreaView>
    
)
}

export default Index;
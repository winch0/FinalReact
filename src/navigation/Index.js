import { View, Text } from 'react-native'
import React,{createContext, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import  StackNavigator from  './StackNavigator'

export const CartContext = createContext({});


const Index = () => {
    const [cart, setCart] = useState([]);
    

return (
    <CartContext.Provider value = {{cart:cart,setCart}}>
    <NavigationContainer>
    <StackNavigator/>
    
    </NavigationContainer>
    </CartContext.Provider>
)
}

export default Index;
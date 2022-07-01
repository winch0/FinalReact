import React, {useState,useEffect} from 'react'
import {View,Text,ActivityIndicator } from 'react-native';
import PokemonItem from '../../components/PokemonItem/index.tsx';


const index = () => {
    const [data,setData] = useState([]);
    const [loading, setLoading]=useState(false);
    const [error,setError]=useState(false);

    
    useEffect(() => {
    apiCall();    
    }, []);


    const apiCall = async () => {
        setLoading (true);
    try{
        await fetch ('https://api.pokemontcg.io/v2/cards/')
        .then((response)=>response.json())
        .then(e=>{
            setData(e.data);
            setLoading(false);
            setError(false);
        })
    }catch (error){
        setLoading(false);
        setError(true);
        console.log(error);
    }
    };


    if (loading)
    return <ActivityIndicator size={'large'} style={{padding: 20}} />;

    if (error) return <Text>El servidor ha fallado</Text>;

return (
<View style={{alignItems: 'center'}}>
{data?.map((item)=>{
        return(
        <PokemonItem pokemonCard = {item} key={`pokemonCard${item?.id}`}/>
        );
        })}
</View>
)
}

export default index
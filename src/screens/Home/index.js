import React, {useState, useEffect} from 'react';

//pra saber onde está rodando
import { Platform, ActivityIndicator, StyleSheet, RefreshControl } from 'react-native';
import {useNavigation} from '@react-navigation/native';

//a biblioteca que pede permissões
import { request, PERMISSIONS } from 'react-native-permissions';
//pra pegar a localização mesmo
import GeoLocation from '@react-native-community/geolocation';

//pro getBarbers()
import Api from '../../Api';


import Container from '../../Components/Container';
import { 
    Scroller, 

    HeaderArea, 
    HeaderTitle, 
    SearchButton, 

    LocationArea, 
    LocationInput, 
    LocationFinder,
    ListArea
//LoadingIcon
} from './styles';

import BarberItem from '../../Components/BarberItem';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

//era pra estar importando isso no styles, mas tava dando errado queria continuar o projeto
const styles = StyleSheet.create({
    loading:{
        marginTop: 50
    }
});

export default () => {

    const navigation = useNavigation();
    
    //criando o state do locationtext
    const [locationText, setLocationText] = useState('');
    //alterando as coordenadas
    const [coords, setCoords] = useState(null);
    //carregamento das coords 
    const [loading, setLoading] = useState(false);
    //lista dos barbeiros
    const [list, setList] = useState([])
    //do refresh control
    const [refreshing, setRefreshing] = useState(false);


    const handleLocationFinder = async () => {
        setCoords(null);
        //pegando o resultado da permissão
        let result = await request(
            Platform.OS === 'ios' ?
            //permissão do ios é diferente do android
                PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                :
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );
            //se a resposta da permissão é positiva
        if(result = 'granted') {

            //setando o loading pra true
            setLoading(true);
            //zerando o texto de onde pesquisa a localização(Input)
            setLocationText('');
            //zera a lista de barbeiros
            setList([]);
            
            //isso antes de pegar a localização

            //pegando realmente a localização do usuário que vai ser armazenada em info
            GeoLocation.getCurrentPosition((info)=>{
                //salvando as informações
                setCoords(info.coords);
                //procurando os programadores (getDevelopers)
                getBarbers();
            });
        } else {

        }
        
    }

    const getBarbers = async () =>{
        //seta o loading true e reseta a lista
        setLoading(true);
        setList([]);

        //passar como parametro pra api
        let lat = null;
        let lng = null;

        //se coords existe
        if(coords) {
            //pegando as coordenadas e setando no lat e lng
            lat = coords.latitude;
            lng = coords.longitude;
        }

        //pegando o resultado e setando em set   passando como parametro na api (lat e lng) | locationtext = o que ta digitado la na barra
        let res = await Api.getBarbers(lat, lng, locationText) ;

        //console.log(res) a resposta recebida pela api, ou seja "data", que são as informações dos barbeiros
        if(res.error == '') {
            //se tem o location
            if(res.loc) {
                //muda o texto pro local
                setLocationText(res.loc);
            }

            setList(res.data);
        } else {
            //mostrar o erro
            alert("Erro: "+res.error);
        }

        setLoading(false);
    }
    
    useEffect(()=>{
        getBarbers();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        //simplesmente roda a função de pegar os .. novamente
        getBarbers();
    }

    const handleLocationSearch = () => {
        setCoords({});
        getBarbers();
    }
    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>

                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre o seu programador favorito</HeaderTitle>
                    <SearchButton onPress={()=>navigation.navigate('Search')}>
                        <SearchIcon width="26" height="26" fill="#FFF" />
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput 
                        placeholder="Onde você está?" 
                        placeholderTextColor="#FFF" 
                        value={locationText}
                        onChangeText={t=>setLocationText(t)}
                        onEndEditing={handleLocationSearch}
                        />
                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width="24" height="24" fill="#FFF" />
                    </LocationFinder>
                </LocationArea>
                {loading &&
                    <ActivityIndicator size="large" color="#FFF" style={styles.loading} />
                }
                <ListArea>
                    {list.map((item, k)=>(
                        <BarberItem key={k} data={item} />
                    ))}
                </ListArea>
            </Scroller>
        </Container>
    );
}

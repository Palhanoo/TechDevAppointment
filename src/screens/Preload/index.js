import React, { useEffect, useContext} from 'react';
import { LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';


import Container from '../../Components/Container';
import { UserContext } from '../../contexts/UserContext';

import Api from '../../Api';

//import PreLoader from '../../Components/Preloader';
import BarberLogo from '../../assets/barber.svg';

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
                const token = await AsyncStorage.getItem('token'); //pega o Token que ta salvo no app
                if(token) {
                    //validar o token
                    //pegando o token do token
                    let res = await Api.checkToken(token);
                    //se a resposta do res funcionou, ou seja, recebi um token válido pq chequei na api
                    if(res.token) {
                        //salvando o token no async storage
                        await AsyncStorage.setItem('token', res.token)

                        //salvar no context pra enviar a informação no setavatar, que foi setado no reducer
                        userDispatch({
                            type: 'setAvatar',
                            payload:{
                                avatar: res.data.avatar
                            }
                        });

                        navigation.reset({
                            routes:[{name:'MainTab'}]
                        });
                        
                    } else {
                        //se a resposta não for válida, volta pra login
                        navigation.navigate('SignIn');
                    }

                } else{
                    navigation.navigate('SignIn');
                }
                
        }
        checkToken();
    }, []);


    return (
        <Container>
            <BarberLogo width="100%" height="160" />
            <LoadingIcon size="large" color="#555"/>
        </Container>
    )
}
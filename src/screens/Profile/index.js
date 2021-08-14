import React from 'react';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Container from '../../Components/Container';
//import { Container } from './styles';

import Api from '../../Api';

export default () => {

    const navigation = useNavigation();

    const handleLogoutClick = async () => {
        //invalidando o token, usando o logout da API
        await Api.logout();
        navigation.reset({
            routes:[{name:'SignIn'}]
        });
    }

    return (
        <Container>
            <Text>Tela PROFILE</Text>
            <Button title="Sair" onPress={handleLogoutClick} />
        </Container>
    );
}
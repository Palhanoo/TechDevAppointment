import React, {useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '../../contexts/UserContext';

import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

import Api from '../../Api';

import Vegeta from '../../Components/Vegeta';
//import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';

import SignInput from '../../Components/SignInput';


export default () => {
    const {dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        //verifica se os campos estão preenchidos
        if(nameField != ''&& emailField != '' && passwordField != '') {
            //seta a resposta da função para res, enviando o nome, email, e senha
            let res = await Api.signUp(nameField, emailField, passwordField);
            
            console.log(res);
            //o res do res.token, res.data.avatar, pode mudar se o if for por ex if(json.token) {como é no login}
            //esse res no caso é se ele receber uma resposta que contenha "token", vai validar
            if(res.token) {
                //salvando o token no async storage
                await AsyncStorage.setItem('token', res.token)

                    
                //salvar no context pra enviar a informação do setavatar, que foi setado no reducer
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
                alert("Erro: "+res.error);
            }
        } else {
            alert("Preencha os campos");
        }
    }
    
    //processo de fazer com que o usuário vá pra tela de cadastro sem conseguir voltar pra de login
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }
    
    return (
        <Container>
            <Vegeta />

            <InputArea>
            <SignInput 
                IconSvg={PersonIcon} 
                placeholder="Digite seu NOME" 
                value={nameField}
                onChangeText={t=>setNameField(t)}
            />
            <SignInput 
                IconSvg={EmailIcon} 
                placeholder="Digite seu e-mail" 
                value={emailField}
                onChangeText={t=>setEmailField(t)}
            />
            <SignInput 
                IconSvg={LockIcon}  
                placeholder="Digite sua senha" 
                value={passwordField}
                onChangeText={t=>setPasswordField(t)}  
                password={true}  
            />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>
            
            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Sei que tu tem conta pô</SignMessageButtonText>
                <SignMessageButtonTextBold>FAZ O LOGIN AE</SignMessageButtonTextBold>
            </SignMessageButton>
 
        </Container>
    )
}   
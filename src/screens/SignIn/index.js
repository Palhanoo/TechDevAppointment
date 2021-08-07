import React, {useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
//importando o "contexto" pra salvar as informações nele junto com o usecontext
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

import SignInput from '../../Components/SignInput';


export default () => {
    //estou setando o dispatch como userdispatch utilizando o Usecontext, pegando o UserContext que eu criei
    const { dispatch: userDispatch} = useContext(UserContext)
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        //verifica se escreveu alguma coisa
        if(emailField != '' && passwordField != '') {
            //usa a API SIGIN IN enviando o email e a senha
            let json = await Api.signIn(emailField, passwordField);
//            console.log(json);
            //verificando se existe o json.token, pois é o parametro que é recebido no login
            if(json.token) {
                //salvando o token no async storage
                await AsyncStorage.setItem('token', json.token)

                
        //salvar no context pra enviar a informação no setavatar, que foi setado no reducer
                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: json.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });
            }else {
                alert('Errou ai em brodi');
            }

        } else {
            alert("Faz o login ai po");
        }
    }
    
    //processo de fazer com que o usuário vá pra tela de cadastro sem conseguir voltar pra de login
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }
    
    return (
        <Container>
            <Vegeta />

            <InputArea>
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
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>
            
            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Pô mano, SKJKDSKDSKJ</SignMessageButtonText>
                <SignMessageButtonTextBold>CRIA A CONTA AE TIO</SignMessageButtonTextBold>
            </SignMessageButton>
 
        </Container>
    )
}
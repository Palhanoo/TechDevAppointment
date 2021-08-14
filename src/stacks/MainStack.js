import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import MainTab from '../stacks/MainTab';
import Barber from '../screens/Barber';

const Stack = createStackNavigator(); //criando o Stack de navegação

export default () => (
//rodando o stack com todas as telas \/    
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Barber" component={Barber} />
    </Stack.Navigator>
);
//na tela Barber como eu ia pra ela de muitos pontos, pra não precisar criar uma stack pra cada tela, coloca ela no próprio stack,  
//que vai continuar tendo acesso as informações
import React, { createContext, useReducer} from 'react';
import {initialState, UserReducer } from '../reducers/UserReducer'; //pegando o estado inicial das informações além de pegar o próprio reducer, ou seja as informações.
export const UserContext = createContext(); //criando "contexto" de informações do usuário

//children é o conteudo dentro do contexto // usando como provider
//essa função \/ vai englobar todo o <Navigation.Container>, no caso eles vão ser as childrens.
export default ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);//criando o state e dispatch, usando usereducer, mandando o proprio userreducer e mandando o initialstate que são as informações iniciais 
    
    return (
        <UserContext.Provider value={{state, dispatch}}> 
            {children}
        </UserContext.Provider>
    );
}
//pra pegar o token precisa do async
import AsyncStorage from '@react-native-community/async-storage';

const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default {
    checkToken: async (token) => {
        //criando a requisição a API online
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            //propriedades \/ (pra ser login tem que ser metodo POST)
            method: 'POST',
            headers:{
                //dizendo que aceita e que vai mandar conteudo em json
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            //conteudo que to mandando no post
            body: JSON.stringify({token})
        });
        //transformando a resposta em um json
        const json = await req.json();
        //retornando a requisição
        return json;
    },
    signIn: async (email, password) => {

        console.log("URL", `${BASE_API}/auth/login`); //testando se ta enviando a url certa
        console.log("BODY", JSON.stringify({email, password}))// testando se ta enviando os dados certos
 //      console.log("email", email); //testando do msm jeito
 //       console.log("password", password);
     
         //criando a requisição a API online
        const req = await fetch(`${BASE_API}/auth/login`, {
            //propriedades \/ (pra ser login {pois vai enviar informações} tem que ser metodo POST)
            method: 'POST',
            headers:{
                //dizendo que aceita e que vai mandar conteudo em json
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            //conteudo que to mandando no post
            body: JSON.stringify({email, password})
        });
        //transformando a resposta em um json
        const json = await req.json();
        //retornando a requisição
        return json;
    },
    signUp: async (name, email, password) => {
//        console.log("BODY", JSON.stringify({name, email, password}));
//       console.log("URL", `${BASE_API}/user`);
        //criando a requisição a API online
        const req = await fetch(`${BASE_API}/user`, {
            //propriedades \/ (pra ser login tem que ser metodo POST)
            method: 'POST',
            headers:{
                //dizendo que aceita e que vai mandar conteudo em json
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            //conteudo que to mandando no post
            body: JSON.stringify({name, email, password})
        });
        //transformando a resposta em um json
        const json = await req.json();
        //retornando a requisição
        return json;
    },//action pra pegar os barbeiros
    getBarbers: async () => {
        //pegando o token
        const token = await AsyncStorage.getItem('token');
        //depois de logado sempre mandar o token junto
        const req = await fetch(`${BASE_API}/barbers?token=${token}`);
        //pegando o resultado da requisição
        const json = await req.json();
        //retornando o resultado
        return json;
    }
}; 
import React from 'react';
//essas são as informações que vou ter em qualquer tela que tiver acessando

export const initialState = {
    avatar: '',
    favorites: [],
    appointments: []
};
//grade de ações que vai poder fazer dentro da caixinha(contexto) de informações do usuário
export const UserReducer = (state, action) => {
    switch(action.type) {
        case 'setAvatar':
            return { ...state, avatar: action.payload.avatar };
        break;
        default:
            return state;
    }
}


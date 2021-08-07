import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width:100%;
    height:60px;
    background-color: #83D6E4;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #893101;
    margin-left: 10px;
`;
//toda informação VEM de fora, pois aqui é o componente!
//onChangeText ta simplesmente setando o t, que é o valor digitado pra ser o valor de setemail
export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#893101"/>
            <Input 
                placeholder={placeholder}
                placeholderTextColor="#893101"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    )
}
import React from 'react';
import styled from 'styled-components/native';

//exportando os components
export const Container = styled.SafeAreaView`
    flex:1;             
    background-color: #FF9C4A;
    justify-content: center;
    align-items: center;
`;
export const InputArea = styled.View`
    padding:40px;
    width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #ED820E;
    border-radius: 30px;
    justify-content:center;
    align-items:center;
`;
export const CustomButtonText = styled.Text`
    font-size:18px;
    color: black;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;
export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: blue;
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: blue;
    font-weight: bold;
    margin-left: 5px;
`;

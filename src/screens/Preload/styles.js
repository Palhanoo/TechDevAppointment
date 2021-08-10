import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

//exportando os components
export const Container = styled.SafeAreaView`
    background-color: #FF9C4A;
    flex:1;
    justify-content: center;
    align-items: center;
`;
export const LoadingIcon = styled.ActivityIndicator`
    padding: 40px;
`;
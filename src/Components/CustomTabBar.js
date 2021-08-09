import React from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../assets/home.svg';
import SearchIcon from '../assets/search.svg';
import TodayIcon from '../assets/today.svg';
import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';



const TabArea = styled.View`
    height:60px;
    background-color: #cdcdf2;  
    flex-direction:row;
`;
const TabItem = styled.TouchableOpacity`
    flex:1;
    justify-content:center;
    align-items: center;
`;

export default () => {
    return (
        <TabArea>
            <TabItem><HomeIcon width="24" height="24" fill="#FFF" /></TabItem>
            <TabItem><SearchIcon width="24" height="24" fill="#FFF" /></TabItem>
            <TabItem><TodayIcon width="24" height="24" fill="#FFF" /></TabItem>
            <TabItem><FavoriteIcon width="24" height="24" fill="#FFF" /></TabItem>
            <TabItem><AccountIcon Icon width="24" height="24" fill="#FFF" /></TabItem>
        </TabArea>
    );
}
import React from 'react';
import styled from 'styled-components';

const Image = styled.Image``;

function PreLoader() {
    return (
        <Image 
            style={{width:250, height:250}}
            source={require('../assets/mobile-development.png')}
        />
    );
}


export default PreLoader;
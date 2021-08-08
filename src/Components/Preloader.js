import React from 'react';
import { Image } from 'react-native';

function PreLoader() {
    return (
        <Image 
            style={{width:150, height:150}}
            source={require('../assets/developer.png')}
        />
    );
}

export default PreLoader;
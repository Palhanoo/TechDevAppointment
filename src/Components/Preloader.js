import React from 'react';
import { Image } from 'react-native';

function PreLoader() {
    return (
        <Image 
            style={{width:250, height:250}}
            source={require('../assets/naruto.sasuke.jpg')}
        />
    );
}

export default PreLoader;
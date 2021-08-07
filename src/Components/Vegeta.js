import React from 'react';
import { Image } from 'react-native';

function Vegeta() {
    return (
        <Image 
            style={{width:250, height:250}}
            source={require('../assets/vegeta.hue.jpg')}
        />
    );
}

export default Vegeta;
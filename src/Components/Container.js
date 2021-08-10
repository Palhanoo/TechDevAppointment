import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView, StyleSheet} from 'react-native';

const Container = ({children}) => {
    return (
        <LinearGradient 
            colors={['#897a72', '#1f4459', '#001043']}
            style={styles.container}
        >{children}
        </LinearGradient>    
    )
}

const styles = StyleSheet.create({
    gradient: {
        flex:1,
    },
    container: {
        flex:1,
        justifyContent:'center'
    },
});

export default Container;
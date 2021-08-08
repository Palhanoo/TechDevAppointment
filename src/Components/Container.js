import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView, StyleSheet} from 'react-native';

const Container = ({children}) => {
    return (
        <LinearGradient
            colors={['#222', '#333', '#555']}
            style={styles.gradient}
        >
            <SafeAreaView style={styles.container}>{children}</SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient: {
        flex:1
    },
    container: {
        flex:1,
        marginHorizontal: 15,
        alignItems:'center',
        justifyContent:'center'
    },
});

export default Container;
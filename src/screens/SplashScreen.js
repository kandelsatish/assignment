import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>News</Text>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        fontSize:20,
        fontWeight:"bold"
    }
})



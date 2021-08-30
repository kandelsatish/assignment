import React from 'react'
import { View, StyleSheet } from 'react-native'
export default function Card({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        backgroundColor: '#ffff',
        marginTop:5,
        padding:10
    }

})



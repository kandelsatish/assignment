import React from 'react'
import { TouchableOpacity, Text,StyleSheet} from 'react-native'
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Button({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
            <MaterialCommunityIcons name="send" size={30} color="green"/>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:"center",
        flexDirection:'row',
        marginTop:20
    },
    text:{
        fontSize:18
    }
})

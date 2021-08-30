import React from 'react'
import { TextInput } from 'react-native-paper'
export default function Input({ label, onChangeText,value,multiline,numberOfLines}) {
    return (
        <TextInput
            label={label}
            mode="outlined"
            theme={{ colors: { primary: '#000', underlineColor: 'transparent' } }}
            value={value}
            onChangeText={onChangeText}
            style={{marginTop:10}}
            multiline={multiline}
            numberOfLines={numberOfLines}
        />
    )
}

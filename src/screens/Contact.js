import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Button, Input } from '../components'
export default function Contact() {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    return (
        <View style={styles.container}>
            <Card>
                <Input label="Name"
                    value={username}
                    onChangeText={(name) => setUsername(name)}
                />
                <Input label="Email"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
                <Input label="Message"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    multiline={true}
                    numberOfLines={5}
                />
                <Button title="Send" onPress={()=>alert("Your message have been recorded successfully")}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:5,
    }
})

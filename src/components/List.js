import React from 'react'
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Card from '../components/Card'
export default function List({ data, navigation}) {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("Details", { item: item })}>
                <Card>
                    <View style={{ flex: 1, display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                        <View style={{width:'25%'}}>
                        <Image source={{ uri: item.media }} style={{ height: 70, width: 70, borderRadius: 10 }} />
                        </View>
                        <View style={{width:'75%'}}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text numberOfLines={2} style={{ fontWeight: "bold" }}>{item.summary}</Text>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
        );
    }
    return (
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                style={{flexGrow:1}}
                nestedScrollEnabled
            />
    )
}
const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
})

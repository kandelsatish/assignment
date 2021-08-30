import React from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    useWindowDimensions,
    FlatList,
    TouchableOpacity,
    ImageBackground,
} from 'react-native'
import {SplashScreen,Loading} from '../screens'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import TabBar from '../navigation/TabBar'
import useNews from '../hooks/useNews'
export default function Home({ navigation }) {
    const { height, width } = useWindowDimensions();
    const [getNews, treanding] = useNews();
    const conditionalHeight = treanding.length === 0 ? height : 0.5 * height;
    // header Section
    const renderHeader = () => {
        return (
            <View style={[styles.headingSection, { height: 0.1 * height }]}>
                <MaterialCommunityIcons name="menu"
                    size={40}
                    onPress={() => alert("Yet to implement Drawer")}
                    style={styles.iconBackground} />
                <MaterialCommunityIcons name="contacts" size={40}
                    onPress={() => navigation.navigate('Contact')}
                />
            </View>
        )
    }
    // To show elements in the flatlist
    const renderFlatListItems = ({ item }) => {
        return (
            <TouchableOpacity style={styles.flatListItem}
                onPress={() => navigation.navigate("Details", { item: item })}>
                <ImageBackground source={{ uri: item.media }} resizeMode="cover" style={{ height: '100%', width: '100%' }}>
                    <View style={styles.transparentView}>
                    </View>
                    <View style={{ position: "absolute", top: '50%', paddingLeft: 10 }}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.summary} numberOfLines={4}>{item.summary}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
    const renderTreanding = () => {
        return (
            <View style={{
                width: width,
                height: 0.6 * height,
                padding: 10
            }}>
                {treanding.length === 0
                    ? <Loading />
                    : <>
                        <Text style={styles.breakingNews}>Breaking News</Text>
                        <View style={styles.flatList}>
                            <FlatList
                                data={treanding}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={renderFlatListItems}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </>
                }
            </View>
        )
    }

    const renderTabBars = () => {
        return (
            <ScrollView>
                <View style={{
                    width: width,
                    height: conditionalHeight,
                    padding: 10,
                }}>
                    <TabBar navigation={navigation} />
                </View>
            </ScrollView>
        )
    }
    React.useEffect(() => {
        getNews();
    }, [])

    if (treanding.length === 0) {
        return <SplashScreen />
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {renderHeader()}
            {renderTreanding()}
            {renderTabBars()}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    breakingNews: {
        fontSize: 30,
        fontWeight: "bold"
    },
    headingSection: {
        padding: 10,
        justifyContent: "center",
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: '#fff'
    },
    iconBackground: {
        padding: 5,
        borderRadius: 5
    },
    flatList: {
        height: '100%',
        paddingBottom: 10,
        justifyContent: 'center',
    },
    flatListItem: {
        margin: 10,
        height: '90%',
        width: 250,
        borderRadius: 10,
        backgroundColor: '#ffff',
    },
    transparentView: {
        backgroundColor: 'black',
        height: '60%',
        width: '100%',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    summary: {
        color: '#ffff'
    }
})


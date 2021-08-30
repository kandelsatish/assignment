import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Technology, Business, Sports, Detail } from '../screens'
const Tab = createMaterialTopTabNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();

export default function TabBar() {
    return (
        <Tab.Navigator
            initialRouteName="Technology"
            screenOptions={{
                tabBarScrollEnabled: true,
                tabBarPressColor: 'blue',
                tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
                tabBarItemStyle: { width: 150 },
                tabBarStyle: { backgroundColor: '#fff', height: 50 }
            }}
        >
            <Tab.Screen name="Technology">
                {() => (
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Tec" component={Technology} />
                        <Stack.Screen name="Detail" component={Detail} />
                    </Stack.Navigator>
                )}
            </Tab.Screen>
            <Tab.Screen name="Business">
                {() => (
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Busn" component={Business} />
                        <Stack.Screen name="Detail" component={Detail} />
                    </Stack.Navigator>
                )}
            </Tab.Screen>
            <Tab.Screen name="Sports">
                {() => (
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Spot" component={Sports} />
                        <Stack.Screen name="Detail" component={Detail} />
                    </Stack.Navigator>
                )}
            </Tab.Screen>
        </Tab.Navigator>
    )
}




import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Detail,Contact } from './src/screens'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Detail} options={{
          title: "News"
        }} />
        <Stack.Screen name="Contact" component={Contact} options={{headerTitle:"Get in touch"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

import React from 'react'
import { WebView } from 'react-native-webview'
export default function Detail({ route }) {
    const { item } = route.params;
    const link = item.link;
    return <WebView source={{ uri: link }} />
}

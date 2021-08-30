import React from 'react'
import List from '../components/List'
import useTechnology from '../hooks/useTechnology';
import {Loading} from '../screens'
export default function Technology({ navigation }) {
    const [getTechnology, technology] = useTechnology();
    React.useEffect(() => {
        getTechnology();
    }, [])
    if (technology.length === 0) {
        return <Loading />
    }
    return <List data={technology} navigation={navigation} />
}

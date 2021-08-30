import React from 'react'
import List from '../components/List'
import useNews from '../hooks/useNews'
import Loading from './Loading';
export default function Sports({ navigation }) {
    const [getSports, sports] = useNews();
    console.log(sports);
    React.useEffect(() => {
        getSports();
    }, []);
    if (sports.length === 0) {
        return <Loading />
    }
    return <List data={sports} navigation={navigation} />
}

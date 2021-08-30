import React from 'react'
import List from '../components/List'
import useNews from '../hooks/useNews'
import Loading from './Loading';
export default function Technology({ navigation }) {
    const [getBusiness,business] = useNews();
    console.log(business);
    React.useEffect(() => {
        getBusiness()
    }, []);
    if (business.length === 0) {
        return <Loading />
    }
    return <List data={business} navigation={navigation} />
}

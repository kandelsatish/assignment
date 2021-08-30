import React, { useState } from 'react'
import news from '../api/news'

export default () => {
    const [treanding, setTreanding] = useState([]);
    const [error, setError] = useState("");
    const getNews = () => {
        news.get('/search', {
            params: {
                q: "breaking",
                lang: 'en',
                page_size: 5
            }
        }).then((response) => {
            setTreanding(response.data.articles);
        }).catch((err) => setError(err));
    }
    return [getNews, treanding];
}
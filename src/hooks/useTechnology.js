import React, { useState } from 'react'
import news from '../api/news'

export default () => {
    const [technology, setTechnology] = useState([]);
    const [error, setError] = useState("");
    const getTechnology = () => news.get('/search', {
        params: {
            q: "technology",
            lang: 'en',
            page_size: 10
        }
    }).then((response) => {
        setTechnology(response.data.articles);
    }).catch((err) => setError(err))
    return [getTechnology, technology, error];
}
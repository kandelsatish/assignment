import React, { useState, useEffect } from 'react'
import news from '../api/news'

export default () => {
    const [sports, setSports] = useState([]);
    const [error, setError] = useState("");
    const getSports = () => {
        news.get('/search', {
            params: {
                q: "sports",
                lang: 'en',
                page_size:10
            }
        }).then((response) => {
            setSports(response.data.articles);
        }).catch((err) => setError(err));
    }
    return [getSports, sports];
}
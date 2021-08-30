import React, { useState, useEffect } from 'react'
import news from '../api/news'

export default () => {
    const [business, setBusiness] = useState([]);
    const [error, setError] = useState("");
    const getBusiness = () => {
        news.get('/search', {
            params: {
                q: "business",
                lang: 'en',
                page_size:10
            }
        }).then((response) => {
            setBusiness(response.data.articles);
        }).catch((err) => setError(err))
    }
    return [getBusiness,business];
}
import axios from "axios";

export default axios.create({
    baseURL: 'https://free-news.p.rapidapi.com/v1',
    headers: {
        'x-rapidapi-host': 'free-news.p.rapidapi.com',
        'x-rapidapi-key': '72c2cdf56bmsh589aa076441470cp17eaf9jsndf2b4fa80cdd'
    }
});

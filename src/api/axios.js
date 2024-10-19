import axios from 'axios';

const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params :{
        api_key: "cd97c06395898b35616a1ba1343258ae",
        language: "ko-KR",
    },
});

export default instance;
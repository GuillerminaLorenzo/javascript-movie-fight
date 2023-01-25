const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'd24ffbe3',
            i: 'tt0848228'
        }
    });
    console.log(response.data);
};

fetchData();
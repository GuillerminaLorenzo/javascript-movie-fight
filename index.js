const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'd24ffbe3',
            s: 'avengers'
        }
    });
    console.log(response.data);
};

fetchData();
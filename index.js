const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'd24ffbe3',
            s: searchTerm
        }
    });
    console.log(response.data);
};

const input = document.querySelector('input');

const debounce = (callback, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            callback.apply(null, args)
        }, delay)
    };
};

const onInput = event => {
   fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput));
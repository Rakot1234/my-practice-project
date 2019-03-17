import axios from 'axios';

const getData = async (directory) => {
    let data = ''; 

    await axios
        .get(directory)
        .then(res => { data = res.data; })
        .catch(res => { data = res });
    
    return data;
}

export default getData;

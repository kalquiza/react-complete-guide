import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://react-my-burger-57e90-default-rtdb.firebaseio.com/' 
});

export default instance;
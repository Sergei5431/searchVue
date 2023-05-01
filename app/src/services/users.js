import axios from 'axios';

export const getUsers = () => {
    axios.get('https://api.github.com/search/repositories?q=subject')
    .then((res) => {
        console.log(res)
      return res.data.items
    }).catch(error => {
      console.log(error)
    });
}


import axios from 'axios'


const api = {
  fetchItemsFromServer: () => async () => {
    return await axios.get('https://6283bc6f38279cef71dbab37.mockapi.io/api/items/')
  }
}

export default api
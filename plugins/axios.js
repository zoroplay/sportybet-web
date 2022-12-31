import axios from 'axios'
import LocalStorageService from '../services/localStorage';

export default axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? process.env.devURL : process.env.prodURL,
  headers: {
    Accept: "application/json",
    'Authorization' : `${LocalStorageService.getAccessToken()}`
  }
})

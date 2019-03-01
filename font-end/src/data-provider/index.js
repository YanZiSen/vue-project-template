import axios from 'axios'
import './config'
import { APIALL } from './apiPath'

export default {
  getInfo (params) {
    return axios.get(APIALL.GET_INFO, { params: params })
  },
  setInfo (params) {
    return axios.post(APIALL.SET_INFO, params)
  },
  registerUser (params) {
    return axios.post(APIALL.CREATE_USER, params)
  }
}

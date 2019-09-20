import axios from 'axios';
import * as constant from './constants'

export default axios.create({
    baseURL: constant.baseUrl,
    headers: {
        "Content-type": "application/json",
        "RENMONEY-API-KEY" : "4Opo57425A0dS7Y3o4y2P47Ww00g949B"
    }
});
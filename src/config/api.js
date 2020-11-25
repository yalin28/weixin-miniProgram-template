import request from '../utils/request'

const BASE_URL = 'https://randomuser.me'
const GET = 'GET'
const POST = 'POST'

// common
const getApi = BASE_URL + '/api'

// index
export const getHomeList = function (data) {
  return request(getApi, data, GET)
}

// user

// ...

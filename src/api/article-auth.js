import apiUrl from '../apiConfig'
import axios from 'axios'

// Show/Index Article //////////////////////////////////////////////////////////
export const indexArt = () => {
  return axios({
    url: apiUrl + '/articles',
    method: 'GET'
  })
}
// Show/Index Article //////////////////////////////////////////////////////////
export const getArticle = (id) => {
  return axios({
    url: apiUrl + '/articles/' + id,
    method: 'GET'
  })
}

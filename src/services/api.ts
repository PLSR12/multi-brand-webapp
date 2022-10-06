import axios from 'axios'

const api = axios.create({
  baseURL: 'https://bk-pricing-dev.burgerking.com.br/pricing-engine',
})

export default api

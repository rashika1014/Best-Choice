import { environment } from 'src/environments/environment'

export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000'
export const productsUrl = 'https://www.mocky.io/v2/5eda4003330000740079ea60';
export const cartUrl = baseUrl + '/cart'
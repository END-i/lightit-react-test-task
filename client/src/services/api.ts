import type {
  AuthRequest,
  IAddReview,
  IReview,
  IGetReviews,
  IGetProducts,
  IGetProductDetails,
  ILogin,
  IRegistration,
} from 'types'

function getProducts(): IGetProducts {
  return {
    method: 'get',
    url: 'products',
  }
}

function getProductDetails(id: string): IGetProductDetails {
  return {
    method: 'get',
    url: `products/${id}`,
  }
}

function getReviews(productId: string): IGetReviews {
  return {
    method: 'get',
    url: `products/${productId}/comments`,
  }
}

function addReview({ productId, rate, text }: IReview): IAddReview {
  return {
    method: 'post',
    url: `reviews/${productId}`,
    data: {
      rate,
      text,
    },
  }
}

function register(payload: AuthRequest): IRegistration {
  return {
    method: 'post',
    url: 'register/',
    data: payload,
  }
}

function login(payload: AuthRequest): ILogin {
  return {
    method: 'post',
    url: 'login/',
    data: payload,
  }
}

const services: any = {
  getProducts,
  getProductDetails,
  getReviews,
  addReview,
  register,
  login,
}

export const imageBaseUrl = process.env.REACT_APP_IMAGE_BASE_URL

export default services

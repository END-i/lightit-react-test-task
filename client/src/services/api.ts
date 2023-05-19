import type {
  AuthRequest,
  IAddComment,
  IComment,
  IGetComments,
  IGetProducts,
  ILogin,
  IRegistration,
  IServices,
} from 'types'

function getProducts(): IGetProducts {
  return {
    method: 'get',
    url: 'api/products',
  }
}

function getComments(productId: string): IGetComments {
  return {
    method: 'get',
    url: `api/reviews/${productId}`,
  }
}

function addComment({ productId, rate, text }: IComment): IAddComment {
  return {
    method: 'post',
    url: `api/reviews/${productId}`,
    data: {
      rate,
      text,
    },
  }
}

function register(payload: AuthRequest): IRegistration {
  return {
    method: 'post',
    url: 'api/register/',
    data: payload,
  }
}

function login(payload: AuthRequest): ILogin {
  return {
    method: 'post',
    url: 'api/login/',
    data: payload,
  }
}

const services: any = {
  getProducts,
  getComments,
  addComment,
  register,
  login,
}

export default services

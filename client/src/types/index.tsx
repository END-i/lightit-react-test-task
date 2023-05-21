export interface Product {
  id: number
  image: string
  text: string
  title: string
  price: number
}

export type Products = Product[]

export interface CreatedBy {
  email: string
  firstName: string
  id: number
  lastName: string
  username: string
}
export interface IReview {
  createdAt: string
  createdBy: CreatedBy
  id: number
  productId: number
  rate: number
  text: string
}
export type IReviews = IReview[]

export interface ChangedReview {
  id: number
  username: string
  text: string
  created_at: string
  rate: number
}

export interface AuthRequest {
  username: string
  password: string
}
export interface AuthResponse {
  success: boolean
  token: string
  message?: string
}

export interface AddReviewResponse {
  success: boolean
}

export interface NewReview {
  rate: number
  text: string
}

export interface AddReviewPayload extends NewReview {
  product_id: string
}

export type Favorites = {
  product: Product
  comments: ChangedReview
}[]

export interface IProfile {
  firstName: string
  lastName: string
  photo: string
}

type NotificationTypes = 'Error' | 'Success' | 'Info'
export interface Notification {
  type: NotificationTypes
  title: string
  text?: string
}

export type INotifications = Notification[]

export interface IGetProducts {
  method: string
  url: string
}
export type IGetProductDetails = IGetProducts
export type IGetReviews = IGetProducts
export interface IAddReview {
  method: string
  url: string
  data: {
    rate: number
    text: string
  }
}
export interface IReview {
  productId: number
  rate: number
  text: string
}
export interface IRegistration {
  method: string
  url: string
  data: AuthRequest
}
export interface ILogin {
  method: string
  url: string
  data: AuthRequest
}

export type APItypes = IGetProducts | IGetReviews | IAddReview | IRegistration | ILogin

export enum ServiceNames {
  getProducts,
  getReviews,
  addReview,
  register,
  login,
}

export interface IServices {
  [ServiceNames.getProducts]: () => IGetProducts
  [ServiceNames.getReviews]: (productId: string) => IGetReviews
  [ServiceNames.addReview]: (props: IReview) => IAddReview
  [ServiceNames.register]: (props: AuthRequest) => IRegistration
  [ServiceNames.login]: (payload: AuthRequest) => ILogin
}

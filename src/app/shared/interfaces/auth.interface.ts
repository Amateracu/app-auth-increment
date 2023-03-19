export interface IAuth {
  email: string;
  password: string;
}
export interface IAuthResponse {
  accessToken: string;
  expiresIn: string;
  lastName: string;
  firstName: string;
}

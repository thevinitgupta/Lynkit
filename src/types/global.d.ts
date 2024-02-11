export interface UserData {
    name: string;
    email: string;
    verified : boolean;
    _id : string
  }

export interface ApiResponse {
  status : number,
  data : UserData | string,
  error : Error | string,
}

export interface LoginApiResponse extends ApiResponse {
  token : null | string
}
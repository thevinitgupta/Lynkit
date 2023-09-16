export interface UserData {
    name: string;
    email: string;
    verified : boolean;
    _id : string
  }

export interface ApiResponse {
  status : number,
  data : UserData | string,
  error : Error | string
}
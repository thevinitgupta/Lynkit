import axios, { AxiosResponse } from "axios";
import { ApiResponse, UserData } from "../types/global";

export interface ProfileData extends UserData {
    message : string;
  }

export const getUserData = async() : Promise<ProfileData> => {
    try {
      const response : AxiosResponse = await axios.get("http://localhost:3003/user", {
        headers : {
          "Content-Type" : "application/json",
        },
        withCredentials: true,
      });
      const {status, data } = response;
      console.log(data)
      if(status!==200 || !data.user){
        const nullUser : ProfileData = {
          name : "",
          email : "",
          _id : "",
          verified : false,
          message : data.message
        };
        return nullUser;
      }
      return data.user as ProfileData;
      
    } catch (error) {
      console.log(error);
      throw new Error("Data Fetching Failed")
    }
}

export const logoutUser = async () => {
    try {
        const { data, status } = await axios.post("http://localhost:3003/auth/logout", {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        });
        const result: ApiResponse = {
            status: status,
            data: "",
            error: ""
        }
        if (status !== 200 || !data) {
            result.error = data.message;
        }
        else result.data = data.data;
        return result;
    } catch (error) {
        console.log(error);
        const result: ApiResponse = {
            status: 500,
            data: "",
            error: error instanceof Error ? error.message : "Something went wrong"
        }
        return result;
    }
}
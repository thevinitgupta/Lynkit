import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query"
import axios, { AxiosResponse } from "axios";
export interface LynksArray {
    lynks: LynkData[]
  }
  
export interface LynkData {
    _id : string,
    userId: string,
    shortLynk: string,
    shortId: string,
    originalLynk: string,
    clickCount: number
  }
export const useCreateLynk = () => {
    const queryClient = useQueryClient();
    queryClient.invalidateQueries(["user-lynks"]);
    return useMutation((link : string) => {
        return axios.post("http://localhost:3003/lynk/create", {
            withCredentials : true,
            link
        })}
    )
}

const getLynks  = async() : Promise<LynkData[]> => {
    try {
      const response : AxiosResponse = await axios.get("http://localhost:3003/lynk", {
        headers : {
          "Content-Type" : "application/json",
        },
        withCredentials: true,
      });
      const {status, data } = response;
      console.log(data)
      if(status!==200 || !data.lynks){
        
        return [];
      }
      let lynksArray : LynkData[] = [];
      data.lynks.forEach((lynk : any) => {
        lynksArray.push(lynk as LynkData);
      });
      return lynksArray;
      
    } catch (error) {
      console.log(error);
      throw new Error("Data Fetching Failed")
    }
}

export const useFetchUserLynks = () => {
  return useQuery<LynkData[]>(
    ["user-lynks"],
    getLynks,
    {
      notifyOnChangeProps: ['data', 'error'],
      staleTime: 60000
    }
  )
}
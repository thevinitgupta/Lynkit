import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query"
import  { AxiosResponse } from "axios";
import { authApi, dataApi } from "./wrapper";
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
        return dataApi.post("/lynk/create", {
            link
        })}
    )
}

const getLynks  = async() : Promise<LynkData[]> => {
    try {
      const response : AxiosResponse = await dataApi.get("/lynk", {
        headers : {
          "Content-Type" : "application/json",
        },
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
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query"
import axios from "axios";
export const useCreateLynk = () => {
    const queryClient = useQueryClient();
    return useMutation((link : string) => {
        return axios.post("http://localhost:3003/lynk/create", {
            withCredentials : true,
            link
        })}
    )
}
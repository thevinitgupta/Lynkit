import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useUserLogout = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    console.log("logout");
    return useMutation(
        () =>
            axios.post("http://localhost:3003/auth/logout", {}, {
                withCredentials: true,
                headers : {
                    "Authorization" : `Bearer ${localStorage.getItem("lynkit-user")}`
                }
            }),
        {
            onSuccess: async (data) => {
                localStorage.removeItem("lynkit-user")
                queryClient.invalidateQueries(["user"]);
                queryClient.invalidateQueries(["user-lynks"]);

                console.log("Successfull : " + data.data)
                setTimeout(()=>{
                    navigate("/auth")
                },1500)
            },
            onError: (error) => {
                console.log("Unsuccesfull : ", error);
            },
        }
    );
}
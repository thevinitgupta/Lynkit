import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { dataApi } from "../utilities/wrapper";

export const useUserLogout = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    console.log("logout");
    return useMutation(
        () =>
            dataApi.post("/auth/logout", {}),
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
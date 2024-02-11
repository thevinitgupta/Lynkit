import { LoginApiResponse } from "../types/global";
import { authApi } from "./wrapper";



export const loginUser = async (email: string, password: string) => {
    const body = {
        email,
        password
    }
    try {
        const {data : response , status } = await authApi.post("/login", body, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log(response);
        const result: LoginApiResponse = {
            status: status,
            data: "",
            error: "",
            token : response?.token
        }
        if (status !== 201 || !response) {
            result.error = response?.message;
        }
        else result.data = response?.data;
        return result;
    } catch (error) {
        console.log(error);
        const result: LoginApiResponse = {
            status: 500,
            data: "",
            error: error instanceof Error ? error.message : "Something went wrong",
            token : null
        }
        return result;
    }
}


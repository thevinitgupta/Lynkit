import axios from "axios";
import { ApiResponse } from "../types/global";



export const loginUser = async (email: string, password: string) => {
    const body = {
        email,
        password
    }
    try {
        const {data : response , status } = await axios.post("http://localhost:3003/auth/login", body, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        });
        console.log(response);
        const result: ApiResponse = {
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
        const result: ApiResponse = {
            status: 500,
            data: "",
            error: error instanceof Error ? error.message : "Something went wrong",
            token : null
        }
        return result;
    }
}


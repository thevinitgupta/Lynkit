import axios from "axios";
import { ApiResponse } from "../types/global";



export const loginUser = async (email: string, password: string) => {
    const body = {
        email,
        password
    }
    try {
        const { data, status } = await axios.post("http://localhost:3003/auth/login", body, {
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
        if (status !== 201 || !data) {
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


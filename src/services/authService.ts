import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/AuthResponse";
import { $auth } from "../api/auth";

export class AuthService {
    static async register(
        name: string,
        email: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> {
        return await $auth.post<AuthResponse>("api/registration", {
            name,
            email,
            password
        });
    }

    static async login(
        email: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> {
        return await $auth.post<AuthResponse>("api/login", {
            email,
            password
        });
    }

    static async logout(): Promise<string> {
        return await $auth.post("api/logout");
    }
}

import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/AuthResponse";
import { $api } from "../api/api";

export class AuthService {
    static async register(
        email: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>("/registration", {
            email,
            password
        });
    }

    static async login(
        email: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>("/login", {
            email,
            password
        });
    }

    static async logout(): Promise<void> {
        return $api.post("/logout");
    }
}

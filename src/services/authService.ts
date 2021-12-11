import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/AuthResponse";
import { $api } from "../api/api";

export class AuthService {
    // private instance: object;
    // constructor() {
    //   if (this.instance) return this.instance;
    //   this.instance = this;
    // }

    static async register(
        email: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>("/register", {
            email,
            password
        });
    }

    static async login(
        email: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>("/register", {
            email,
            password
        });
    }

    static async logout(): Promise<void> {
        return $api.post("/logout");
    }
}

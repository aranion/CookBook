export interface IUser {
    id: string;
    email: string;
    // isActivated: boolean;    // для активации по почте
    // name?: string;           // если добавим профиль пользователя
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}
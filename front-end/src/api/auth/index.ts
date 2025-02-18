import { decryptWithAES, encryptWithAES } from "utils/parse";
import http from "..";
import { Admin, LoginData, LoginResponse } from "./type";
const tokenKey = "newsadmin.token";
const userKey = "app.user";

namespace auth {
  export const login = (body?: LoginData) =>
    http.post<LoginResponse>("admin/auth/login", {
      body,
    });

  export const saveToken = (token: string) => {
    localStorage.setItem(tokenKey, token);
  };

  export const hasToken = () => !!localStorage.getItem(tokenKey);
  export const removeToken = () => localStorage.removeItem(tokenKey);
  export const getToken = () => localStorage.getItem(tokenKey);

  export const info = () =>
    http.get<Admin>("admin/auth/info", { hasAuth: true });

  export const rememberUser = (values: LoginData) => {
    if (values.remember) {
      localStorage.setItem(userKey, encryptWithAES(JSON.stringify(values)));
    } else {
      localStorage.removeItem(userKey);
    }
  };

  export const getRememberUser = () => {
    const userData = localStorage.getItem(userKey);
    if (userData) {
      const _userData = JSON.parse(decryptWithAES(userData)) as LoginData;
      return _userData;
    }
    return undefined;
  };
}

export default auth;

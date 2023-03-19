import { useRouter } from "next/router";
import { deleteCookie, getCookie, hasCookie } from "cookies-next";
import API_URL from "../backend/api_url";

export default class LogAuth{

    static LogOut(url: any) {
        deleteCookie(process.env.NEXT_PUBLIC_LOGIN_TOKEN_COOKIE_NAME as string)
        // deleteCookie("LgTkn")
        window.location.href = url
    }

    

}
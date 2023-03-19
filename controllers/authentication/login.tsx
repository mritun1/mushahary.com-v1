import { useRouter } from "next/router";
import { deleteCookie, getCookie, hasCookie } from "cookies-next";
import API_URL from "../backend/api_url";

export default class LogAuth{

    static LogOut(url: any) {
        deleteCookie("LgTkn")
        window.location.href = url
    }

    

}
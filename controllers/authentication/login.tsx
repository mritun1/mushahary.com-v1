import { useRouter } from "next/router";
import { deleteCookie, hasCookie } from "cookies-next";

export default class LogAuth{
    
    static LoginAuthentication(url:any) {
        if (hasCookie("LgTkn") == false) {
            // REDIRECT IF IT'S NOT LOGGED IN
            let router = useRouter()
            if (typeof window !== 'undefined') {
                router.push(url)
            }
        }
    }
    static LoggedIn(url: any) {
        if (hasCookie("LgTkn") == true) {
            // REDIRECT IF IT'S NOT LOGGED IN
            let router = useRouter()
            if (typeof window !== 'undefined') {
                router.push(url)
            }
        }
    }
    static LogOut(url: any) {
        deleteCookie("LgTkn")
        window.location.href = url
    }
}
import { useEffect } from "react"
import API_URL from "../../../controllers/backend/api_url"

const AdminHead = () => {

    const checkLoginStatus = async () => {
        try {
            const res = await API_URL.get("/api/v1/admin/dash")
            if (res.data.status == 401) {
                window.location.href = "/"
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        checkLoginStatus()
    }, []);
    
    return (
        <div>
            <div className="adminHead">
                <h1>Admin</h1>
            </div>
        </div>
    );
}

export default AdminHead;
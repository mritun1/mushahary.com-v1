import Link from "next/link";
import AdminHead from "../../component/admin/common/AdminHead";
import AdminSidebar from "../../component/admin/common/AdminSidebar";
import { useEffect, useState } from "react";
import Login from "../../controllers/authentication/login";
import API_URL from "../../controllers/backend/api_url";

const dash = () => {

    //LOGIN AUTHENTICATION
    Login.LoginAuthentication("/admin/login")

    const [myData,setMyData] = useState({
        id : "",
        name : "",
        status : ""
    })

    const getApiData = async () => {
        try{
            // const res = await API_URL.get("/api/v1/articles/cat")
            const res = await API_URL.get("/api/v1/admin/dash")
            setMyData({
                id: res.data.Id,
                  name: res.data.Name,
                  status: res.data.Status,
                })
            //console.log(res.data)
        }catch (error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getApiData()
    },[])
    
    return (
        <div>

            <AdminHead />

            <div className="adminBody">
                <AdminSidebar></AdminSidebar>
                <div className="adminContent">

                    <h2>Dashboard</h2>
                    
                    <p>{myData.id}</p>
                    <p>{myData.name}</p>
                    <p>{myData.status}</p>

                    {/* {myData.map(post=>{
                        const {ID,CATEGORY_NAME} = post
                        return <p key={ID}>{ID}. {CATEGORY_NAME}</p>
                    })} */}
                    
                </div>
            </div>

        </div>
    );
}

export default dash;
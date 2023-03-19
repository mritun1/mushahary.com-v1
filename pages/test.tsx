
import axios from "axios";
import { useEffect, useState } from "react";
import API_URL from "../controllers/backend/api_url";

const test = () => {

    // const [myData, setMyData] = useState([])
    const getApiData = async () => {
        try {
            const res = await API_URL.get("/api/v1/admin/dash")
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getApiData()
    }, [])

    

    return (
        <div>
            Enter
        </div>
    );
}

export default test;
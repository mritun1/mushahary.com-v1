import Link from "next/link";
import { useEffect, useState } from "react";
import API_URL from "../../../controllers/backend/api_url";
const PhotosCategory = () => {
    //GET ALL THE LISTS OF ARTICLE CATEGORIES
    const [catList, setCatList] = useState([])
    const getCatList = async () => {
        try {
            const res = await API_URL.get("/api/v1/photos/cat")
            setCatList(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getCatList();

    }, []);
    return (
        <div>
            <div className="photos_categories">
                <p>
                    {catList.map(cat => {
                        const { ID, CATEGORY_NAME } = cat
                        return <a key={ID} href={"/photos/v2/cat/"+ID+"/"+CATEGORY_NAME}>
                            <button>{CATEGORY_NAME}</button>
                        </a>
                    })}
                </p>
            </div>
        </div>
    );
}

export default PhotosCategory;
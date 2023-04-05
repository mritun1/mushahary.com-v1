import AdminSidebar from "../../../component/admin/common/AdminSidebar";
import Link from "next/link";
import AdminHead from "../../../component/admin/common/AdminHead";
import { useEffect, useState } from "react";
import API_URL from "../../../controllers/backend/api_url";
import { url } from "inspector";

const PhotosDash = () => {

    const [photosList, setPhotosList] = useState([])
    let [pagNum, setPagNum] = useState(1)
    var limit = 10
    var offset = 0
    const getPhotosLists = async (o: any, l: any) => {
        try {
            const res = await API_URL.get("/api/v1/photos/only_admin/" + o + "/" + l)

            setPhotosList(res.data.data)
            const pagNumNew = parseInt(res.data.total) / limit
            setPagNum(pagNumNew)

        } catch (error) {
            console.log(error)
        }
    }

    //PAGINATION START
    let newlimit = 0
    function articlePag(e: any) {
        newlimit = e.target.getAttribute("pag-attr") * limit
        if (newlimit > limit) {
            offset = newlimit - limit
        }
        getPhotosLists(offset, limit)

    }
    let pagBtns = []
    let btnNum = 0
    for (let i = 0; i <= pagNum; i++) {
        btnNum++
        pagBtns.push(<button key={btnNum} onClick={articlePag} pag-attr={btnNum}>{btnNum}</button>)
    }
    //PAGINATION END

    function deleteArticle(id: number) {
        const confirmed = window.confirm("Are you sure to Delete?")
        if (confirmed) {
            const del = async () => {
                const res = await API_URL.delete("/api/v1/photos/delete/" + id)
                console.log(res.data)
                if (res.data.status == 200) {
                    getPhotosLists(offset, limit)
                }
            }
            del()
        }
    }

    useEffect(() => {
        getPhotosLists(offset, limit)
    }, [])

    return (
        <div>
            <div>

                <AdminHead />

                <div className="adminBody">
                    <AdminSidebar></AdminSidebar>
                    <div className="adminContent">

                        <div className="contTitle">
                            <h2>
                                <i className="fa-solid fa-newspaper"></i>
                                Photos
                                <Link href={"/admin/photos/edit"}>
                                    <button><i className="fa-solid fa-plus"></i> Add Photo</button>
                                </Link>
                            </h2>
                        </div>

                        <div className="admin_photo_dash">
                            <div className="admin_photo_dash_photoList">

                                {photosList ? (photosList.map(post => {
                                    const {  ID, PHOTO_TITLE, PHOTO_DES, PHOTO_URL } = post
                                    return <div key={ID} className="admin_photo_dash_photoList_photoSec">
                                        <div style={{ backgroundImage: `url(${PHOTO_URL})`}}></div>
                                        <div>
                                            <div>
                                                <h4>{PHOTO_TITLE}</h4>
                                                <p>{PHOTO_DES}</p>
                                            </div>
                                            <div>
                                                <Link href="">
                                                    <button>View</button>
                                                </Link>
                                                <Link href={"/admin/photos/edit/" + ID} >
                                                    <button>Edit</button>
                                                </Link>
                                                <button onClick={() => deleteArticle(ID)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>

                                })) : (<h2>Sorry No Content Found</h2>)}


                            </div>
                            <div className="admin_photoList_pag">
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default PhotosDash;
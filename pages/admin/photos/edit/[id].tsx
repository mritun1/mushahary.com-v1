import AdminSidebar from "../../../../component/admin/common/AdminSidebar";
import Link from "next/link";
import AdminHead from "../../../../component/admin/common/AdminHead";
import { useEffect, useState } from "react";
import API_URL from "../../../../controllers/backend/api_url";
import { useRouter } from "next/router";

const EditPhoto = () => {

    //GET THE EDIT QUERY
    const router = useRouter()
    let { id } = router.query
    
    const [inputData, setFormData] = useState({
        title: '',
        description: '',
        photoFile: '',
        id:'',
        photo_url:'',
    });

    const getEditData = async () => {
        try {
            const res = await API_URL.get("/api/v1/photos/getById/" + id)
            if (res.data.status === 200) {
                setFormData(prevState => ({
                    ...prevState,
                    title: res.data.data.PHOTO_TITLE,
                    description: res.data.data.PHOTO_DES,
                    id: res.data.data.ID,
                    photoFile: res.data.data.PHOTO_FILE,
                    photo_url: res.data.data.PHOTO_URL,
                }))

            }

        } catch (error) {
            console.log(error)
        }
    }

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
        getEditData();
        getCatList();

    }, []);

    //FORM SUBMIT START
    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    };

    //FORM SUBMIT START
    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('photo_category_id', event.target.category.value);
        formData.append('photo_title', inputData.title);
        formData.append('photo_des', inputData.description);
        formData.append('id', inputData.id);
        formData.append('photo_url', inputData.photo_url);

        try {
            const response = await API_URL.put('/api/v1/photos/edit', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            if (response.data.status == 200) {
                window.location.href = "/admin/photos/dash"
            }
        } catch (error) {
            console.error(error);
        }
    };
    //FORM SUBMIT END
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
                                Edit Photos
                                <Link href={"/admin/photos/dash"}>
                                    <button><i className="fa-solid fa-plus"></i> Go Back</button>
                                </Link>
                            </h2>
                        </div>

                        
                        <form onSubmit={handleSubmit}>
                            <div className="admin_dash_createPhoto">

                                <div>
                                    <img src={inputData.photoFile} style={{height:`200px`,width:`auto`}} />
                                </div>
                                <div>

                                    <select name="category" id="category">
                                        <option >SELECT CATEGORY</option>
                                        {catList.map(cats => {
                                            const { ID, CATEGORY_NAME } = cats
                                            return <option key={ID} value={ID}>{CATEGORY_NAME}</option>
                                        })}
                                    </select>
                                </div>

                                <div>
                                    <input type="text" value={inputData.photo_url} onChange={handleInputChange} name="photo_url" id="photo_url" placeholder="photo url..." />
                                </div>
                                <div>
                                    <input type="text" value={"photo_url"} disabled />
                                </div>

                                <div>
                                    <input type="text" value={inputData.title} onChange={handleInputChange} name="title" id="title" placeholder="Photo Title..." />
                                </div>
                                <div>
                                    <textarea value={inputData.description} onChange={handleInputChange} name="description" id="description" placeholder="Photo Description..." ></textarea>
                                </div>
                                <div>
                                    <button type="submit">SUBMIT</button>
                                </div>

                            </div>
                        </form>



                    </div>
                </div>

            </div>
        </div>
    );
}
export async function getServerSideProps(context: { params: any }) {
    const { params } = context;
    const { id } = params;

    return {
        props: {
            id,
        },
    };
}

export default EditPhoto;
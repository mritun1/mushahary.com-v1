import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../../../../component/common/Footer'
import Header from '../../../../component/common/Header'
import PhotosCategory from '../../../../component/public/photos/PhotosCategory'
import PhotosSearch from '../../../../component/public/photos/PhotosSearch'
import API_URL from '../../../../controllers/backend/api_url'

function Photo_view() {
    //GET THE EDIT QUERY
    const router = useRouter()
    let { id } = router.query
    console.log(id)

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        id: '',
        category_name: '',
        date: '',
        photoFile:'',
    });

    const getEditData = async () => {
        try {
            const res = await API_URL.get("/api/v1/photos/getById/" + id)
            if (res.data.status === 200) {

                //console.log(res.data.data.CATEGORY_NAME)

                // CONVERTING TIME START
                const date = new Date(res.data.data.UPDATED_DATE * 1000); // convert Unix timestamp to JavaScript timestamp by multiplying with 1000
                const formattedDate = date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                });
                // CONVERTING TIME END

                setFormData(prevState => ({
                    ...prevState,
                    title: res.data.data.PHOTO_TITLE,
                    description: res.data.data.PHOTO_DES,
                    id: res.data.data.ID,
                    category_name: res.data.data.CATEGORY_NAME,
                    date: formattedDate,
                    photoFile: res.data.data.PHOTO_FILE,
                }))

                //Related Photos
                getRelatedPhotos(res.data.data.PHOTO_CATEGORY_ID, 10)
            }

        } catch (error) {
            console.log(error)
        }
    }

    //GET ALL RELATED PHOTOS
    const [relatedPhotos, setRelatedPhotos] = useState([])
    const getRelatedPhotos = async (cat: any, l: any) => {
        try {
            const res = await API_URL.get("/api/v1/photos/relatedPhotos/" + cat + "/" + l)
            console.log(res.data.data)
            setRelatedPhotos(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getEditData();
    }, []);
    return (
        <div >
            <Head>
                <title>{formData.title}</title>
                <meta name="description" content={formData.description} />
                <link rel="icon" type="image/png" href="/../imgs/icons/profile.jpg" />
            </Head>
            <main className='container'>

                <Header />

                <div className="photos_home">

                    <PhotosCategory />

                    <PhotosSearch />

                    <div className="photos_logo">
                        <h1>{formData.title}</h1>
                    </div>

                    <div className="photo_view">
                        
                        <ul className="cat">
                            <li>
                                <Link href={""}>
                                    <button>{formData.category_name}</button>
                                </Link>
                            </li>
                            <li>
                                Date: {formData.date}
                            </li>
                        </ul>
                        <img src={formData.photoFile} alt="" />
                        <div className="photo_des">
                            <p>{formData.description}</p>
                        </div>
                    </div>

                    <div className="title">
                        <h2>Related Photos</h2>
                    </div>
                    
                    <div className="related_photos">
                        {relatedPhotos ? (relatedPhotos.map(photos=>{
                            const { ID, PHOTO_TITLE, PHOTO_FILE } = photos
                            return <a key={ID} href={"/photos/v2/" + ID + "/" + PHOTO_TITLE}>
                                <img src={PHOTO_FILE} alt="" />
                            </a>
                        })):(<p>No content Found!</p>)}

                    </div>
                    

                </div>

                <Footer />

            </main>
        </div>
    )
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

export default Photo_view
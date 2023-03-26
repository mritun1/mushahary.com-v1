import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../../../../../component/common/Footer'
import Header from '../../../../../component/common/Header'
import PhotosCategory from '../../../../../component/public/photos/PhotosCategory'
import PhotosSearch from '../../../../../component/public/photos/PhotosSearch'
import API_URL from '../../../../../controllers/backend/api_url'

function CatPhotos() {

    //GET THE EDIT QUERY
    const router = useRouter()
    let { id,cat } = router.query
    console.log(id)
    let title = String(cat).replaceAll("%20"," ")

    const [photosList, setPhotosList] = useState([])
    let [pagNum, setPagNum] = useState(1)
    var limit = 10
    var offset = 0
    const getArticleLists = async (o: any, l: any) => {
        try {
            const res = await API_URL.get("/api/v1/photos/getPhotosByCat/" + o + "/" + l+"/"+id)
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
        getArticleLists(offset, limit)

    }
    let pagBtns = []
    let btnNum = 0
    for (let i = 0; i <= pagNum; i++) {
        btnNum++
        pagBtns.push(<button key={btnNum} onClick={articlePag} pag-attr={btnNum}>{btnNum}</button>)
    }
    //PAGINATION END

    useEffect(() => {
        getArticleLists(offset, limit)

    }, [])

    var gal1 = 1
    var gal2 = 2
    var gal3 = 3

    return (
        <div >
            <Head>
                <title>Photos Cat - {title}</title>
                <meta name="description" content={"Photos - "+title} />
                <link rel="icon" type="image/png" href="/../imgs/icons/profile.jpg" />
            </Head>
            <main className='container'>

                <Header />

                <div className="photos_home">

                    <PhotosCategory />

                    <div className="photos_logo">
                        <h1>Photo Cat: {title}</h1>
                    </div>

                    <PhotosSearch />

                    <div className="photos_lists">


                        <div>
                            {photosList ? (photosList.map(post => {
                                const { SL, ID, PHOTO_TITLE, PHOTO_CATEGORY_NAME, PHOTO_FILE, PHOTO_DES } = post
                                if (SL == gal1) {
                                    gal1 = gal1 + 3
                                    return <Link key={ID} href={"/photos/v2/" + ID + "/" + PHOTO_TITLE}>
                                        <img
                                            src={PHOTO_FILE}
                                        />
                                    </Link>

                                }

                            })) : (<h3>Not Found</h3>)}

                        </div>
                        <div>
                            {photosList ? (photosList.map(post => {
                                const { SL, ID, PHOTO_TITLE, PHOTO_CATEGORY_NAME, PHOTO_FILE, PHOTO_DES } = post
                                if (SL == gal2) {
                                    gal2 = gal2 + 3
                                    return <Link key={ID} href={"/photos/v2/" + ID + "/" + PHOTO_TITLE}>
                                        <img
                                            src={PHOTO_FILE}
                                        />
                                    </Link>

                                }

                            })) : (<h3>Not Found</h3>)}

                        </div>
                        <div>
                            {photosList ? (photosList.map(post => {
                                const { SL, ID, PHOTO_TITLE, PHOTO_CATEGORY_NAME, PHOTO_FILE, PHOTO_DES } = post
                                if (SL == gal3) {
                                    gal3 = gal3 + 3
                                    return <Link key={ID} href={"/photos/v2/" + ID + "/" + PHOTO_TITLE}>
                                        <img
                                            src={PHOTO_FILE}
                                        />
                                    </Link>
                                }

                            })) : (<h3>Not Found</h3>)}

                        </div>
                    </div>

                </div>

                <Footer />

            </main>
        </div>
    )
}
export async function getServerSideProps(context: { params: any }) {
    const { params } = context;
    const { id,cat } = params;

    return {
        props: {
            cat,
            id,
        },
    };
}

export default CatPhotos
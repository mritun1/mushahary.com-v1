import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../../../component/common/Footer'
import Header from '../../../component/common/Header'
import PhotosCategory from '../../../component/public/photos/PhotosCategory'
import PhotosSearch from '../../../component/public/photos/PhotosSearch'
import API_URL from '../../../controllers/backend/api_url'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Photos() {

    const [photosList, setPhotosList] = useState([])
    
    var limit = 6

    const [totalPhotos, setTotalPhotos] = useState(0)
    const fetchMoreData = async () => {
        try {
            const res = await API_URL.get(`/api/v1/photos/getAll/${photosList.length}/${limit}`)
            setPhotosList(photosList.concat(res.data.data))
            setTotalPhotos(res.data.total)
        } catch (error) {
            console.log(error)
        }
    }

    //var offset = 0
    // var totalPhotos = 0;
    // const getArticleLists = async (o: any, l: any) => {
    //     try {
    //         const res = await API_URL.get("/api/v1/photos/getAll/" + o + "/" + l)
    //         setPhotosList(res.data.data)
    //         const pagNumNew = parseInt(res.data.total) / limit
            
    //         totalPhotos = res.data.total
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    // useEffect(() => {
    //     getArticleLists(offset, limit)
        
    // }, [])

    var gal1 = 1
    var gal2 = 2
    var gal3 = 3

    return (
        <div >
            <Head>
                <title>Photos - Mushahary Family Personal Photos</title>
                <meta name="description" content="Photos - Mushahary Family Personal Photos" />
                <link rel="icon" type="image/png" href="/../imgs/icons/profile.jpg" />
            </Head>
            <main className='container'>

                <Header />

                <div className="photos_home">

                    <PhotosCategory />

                    <div className="photos_logo">
                        <h1>Mushahary Family Photos</h1>
                        <p>Here we want to share with you about our Photography. Photos captured and and uploaded by Mushahary Family.</p>
                    </div>

                    <PhotosSearch />

                    <InfiniteScroll
                        dataLength={totalPhotos} //This is important field to render the next data
                        next={fetchMoreData}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                    
                        <div className="photos_lists">


                            <div>
                                {photosList ? (photosList.map(post => {
                                    const { SL, ID, PHOTO_TITLE, PHOTO_CATEGORY_NAME, PHOTO_URL, PHOTO_DES } = post
                                    if (SL == gal1) {
                                        gal1 = gal1 + 3
                                        return (<>
                                            <Link key={ID} href={"/photos/v2/" + ID + "/" + PHOTO_TITLE}>
                                                <img
                                                    src={PHOTO_URL} />
                                            </Link>
                                            {/* <iframe src="https://drive.google.com/file/d/1Nynv4xQc4lOopI6aJnuzyhbogI3S5N7w/preview" width="100%" height="480" allow="autoplay"></iframe> */}
                                        </>)

                                    }

                                })) : (<h3>Not Found</h3>)}

                            </div>
                            <div>
                                {photosList ? (photosList.map(post => {
                                    const { SL, ID, PHOTO_TITLE, PHOTO_CATEGORY_NAME, PHOTO_URL, PHOTO_DES } = post
                                    if (SL == gal2) {
                                        gal2 = gal2 + 3
                                        return (<><Link key={ID} href={"/photos/v2/" + ID + "/" + PHOTO_TITLE}>
                                            <img
                                                src={PHOTO_URL}
                                            />
                                        </Link></>)

                                    }

                                })) : (<h3>Not Found</h3>)}

                            </div>
                            <div>
                                {photosList ? (photosList.map(post => {
                                    const { SL, ID, PHOTO_TITLE, PHOTO_CATEGORY_NAME, PHOTO_URL, PHOTO_DES } = post
                                    if (SL == gal3) {
                                        gal3 = gal3 + 3
                                        return (<><Link key={ID} href={"/photos/v2/" + ID + "/" + PHOTO_TITLE}>
                                            <img
                                                src={PHOTO_URL}
                                            />
                                        </Link> </>)
                                    }

                                })) : (<h3>Not Found</h3>)}

                            </div>
                        </div>
                    </InfiniteScroll>
                    

                    {photosList ? (<div className="loading">
                        <img
                            src="/imgs/common/loading.gif"
                        />
                    </div>):(``)}
                    

                </div>

                <Footer />

            </main>
        </div>
    )
}


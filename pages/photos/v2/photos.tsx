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

    const [photosList, setPhotosList] = useState<never[]>([])
    
    var limit = 9
    let [pageNum, setPageNum] = useState(1);
    let [offset, setOffset] = useState(0);

    const fetchMorePhotos = async () => {
        if (pageNum > 1) {
            const nextPageNum = pageNum - 1;
            const newOffset = offset + limit
            //const newOffset = offset - limit 
            console.log(newOffset)
            try {
                const res = await API_URL.get(`/api/v1/photos/getAll/${newOffset}/${limit}`);
                setPhotosList([...photosList, ...res.data.data] as never[]);
                setPageNum(nextPageNum);
                setOffset(newOffset)
            } catch (error) {
                console.log(error);
            }
        }
    };

    
    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const res = await API_URL.get(`/api/v1/photos/getAll/${offset}/${limit}`);
                setPhotosList(res.data.data);
                const totalPages = Math.ceil(res.data.total / limit);
                setPageNum(totalPages);
                //setOffset(res.data.total)
                //console.log(res.data.data)
            } catch (error) {
                console.log(error);
            }
        };
        fetchPhotos();
    }, []);
    

    // var gal1 = 1
    var gal1 = 51
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
                        dataLength={photosList.length}
                        next={fetchMorePhotos}
                        hasMore={pageNum > 1}
                        loader={<div className="loading">
                            <img
                                src="/imgs/common/loading.gif"
                            />
                        </div>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>No more content Found.</b>
                            </p>
                        }
                    >
                    
                        <div className="photos_lists">


                            <div>
                                {photosList ? (photosList.map(post => {
                                    const { SL, ID, PHOTO_TITLE, PHOTO_CATEGORY_NAME, PHOTO_URL, PHOTO_DES } = post
                                    if (SL == gal1) {
                                        // gal1 = gal1 + 3
                                        gal1 = gal1 - 3
                                        return (<>
                                            <Link key={ID} href={"/photos/v2/" + ID + "/" + PHOTO_TITLE}>
                                                <img
                                                    src={PHOTO_URL} />
                                            </Link>
                                        </>)

                                    }

                                })) : (<h3>Not Found</h3>)}

                            </div>
                            <div>
                                {photosList ? (photosList.map(post => {
                                    const { SL, ID, PHOTO_TITLE, PHOTO_CATEGORY_NAME, PHOTO_URL, PHOTO_DES } = post
                                    if (SL == gal2) {
                                        // gal2 = gal2 + 3
                                        gal2 = gal2 - 3
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
                                        // gal3 = gal3 + 3
                                        gal3 = gal3 - 3
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
                    

                   
                    

                </div>

                <Footer />

            </main>
        </div>
    )
}

function fetchData() {
    throw new Error('Function not implemented.')
}


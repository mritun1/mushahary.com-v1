import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../../component/common/footer'
import Header from '../../../component/common/header'
import PhotosCategory from '../../../component/public/photos/PhotosCategory'
import PhotosSearch from '../../../component/public/photos/PhotosSearch'

export default function Photos() {
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

                    <div className="photos_lists">
                        <div>
                            <Link href="/photos/v2/photo_view">
                                <img
                                    src={"/imgs/photos/20160225173731-young-millionaire-sports-car-luxury-attire-businessman-rich-wealthy-lifestyle.jpeg"}
                                />
                            </Link>
                            <Link href="">
                                <img
                                    src={"/imgs/photos/audrey-grace-paul-JFelYZBGjjQ-unsplash.jpg"}
                                />
                            </Link>
                            <Link href="">
                                <img
                                    src={"/imgs/photos/elon-musk-spacex-vogue-2015-ivvpnrdw3n9mz2sc.jpg"}
                                />
                            </Link>
                        </div>
                        <div>
                            <Link href="">
                                <img
                                    src={"/imgs/photos/20160225173731-young-millionaire-sports-car-luxury-attire-businessman-rich-wealthy-lifestyle.jpeg"}
                                />
                            </Link>
                            <Link href="">
                                <img
                                    src={"/imgs/photos/jc-gellidon-7KFVkL1cV0w-unsplash.jpg"}
                                />
                            </Link>
                        </div>
                        <div>
                            <Link href="">
                                <img
                                    src={"/imgs/photos/20160225173731-young-millionaire-sports-car-luxury-attire-businessman-rich-wealthy-lifestyle.jpeg"}
                                />
                            </Link>
                            <Link href="">
                                <img
                                    src={"/imgs/photos/thisisengineering-raeng-w_zE6qlkQKA-unsplash.jpg"}
                                />
                            </Link>
                        </div>
                    </div>

                </div>

                <Footer />

            </main>
        </div>
    )
}

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../../component/common/footer'
import Header from '../../../component/common/header'
import PhotosCategory from '../../../component/public/photos/PhotosCategory'
import PhotosSearch from '../../../component/public/photos/PhotosSearch'

export default function Photo_view() {
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

                    <PhotosSearch />

                    <div className="photos_logo">
                        <h1>Title of the Photos</h1>
                    </div>

                    <div className="photo_view">
                        
                        <ul className="cat">
                            <li>
                                <Link href={""}>
                                    <button>Nature</button>
                                </Link>
                            </li>
                            <li>
                                Date: 20 Jan 2022
                            </li>
                        </ul>
                        <img src="/imgs/photos/audrey-grace-paul-JFelYZBGjjQ-unsplash.jpg" alt="" />
                        <div className="photo_des">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus totam quaerat harum explicabo officia eius aut odio praesentium, provident autem ratione eveniet sunt quod saepe tempora maxime tempore? Sunt, unde. Placeat quo autem animi atque voluptate.</p>
                        </div>
                    </div>

                    <div className="title">
                        <h2>Related Photos</h2>
                    </div>
                    
                    <div className="related_photos">
                        <Link href={""}>
                            <img src="/imgs/photos/elon-musk-spacex-tesla-ceo-ovr8vqe9a8lo0dso.jpg" alt="" />
                        </Link>
                        <Link href={""}>
                            <img src="/imgs/photos/elon-musk-spacex-tesla-ceo-ovr8vqe9a8lo0dso.jpg" alt="" />
                        </Link>
                        <Link href={""}>
                            <img src="/imgs/photos/elon-musk-spacex-tesla-ceo-ovr8vqe9a8lo0dso.jpg" alt="" />
                        </Link>
                        <Link href={""}>
                            <img src="/imgs/photos/elon-musk-spacex-tesla-ceo-ovr8vqe9a8lo0dso.jpg" alt="" />
                        </Link>
                    </div>
                    

                </div>

                <Footer />

            </main>
        </div>
    )
}

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../component/common/Footer'
import Header from '../../component/common/Header'

const For_loop = () => {
    return (
        <div >
            <Head>
                <title>Golang - For Loop Patterns</title>
                <meta name="description" content="Golang - For Loop Patterns" />
            </Head>
            <main className='container'>

                <Header />

                <div className="contentPage">

                    <div className="title">
                        <h1>Golang - For Loop Patterns</h1>
                    </div>

                    <div className="article_list">
                        <div style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg")`}} className="profile"></div>
                        <div className="cont">
                            <Link href="">
                                <h3>Hello this is the text content.</h3>                                
                            </Link>
                            <p>This is the descrition of the content.</p>
                        </div>
                    </div>

                    <div className="article_list">
                        <div style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg")` }} className="profile"></div>
                        <div className="cont">
                            <Link href="">
                                <h3>Hello this is the text content.</h3>
                            </Link>
                            <p>This is the descrition of the content.</p>
                        </div>
                    </div>

                    <div className="article_list">
                        <div style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg")` }} className="profile"></div>
                        <div className="cont">
                            <Link href="">
                                <h3>Hello this is the text content.</h3>
                            </Link>
                            <p>This is the descrition of the content.</p>
                        </div>
                    </div>

                    <div className="article_list">
                        <div style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg")` }} className="profile"></div>
                        <div className="cont">
                            <Link href="">
                                <h3>Hello this is the text content.</h3>
                            </Link>
                            <p>This is the descrition of the content.</p>
                        </div>
                    </div>

                </div>

                <Footer />

            </main>
        </div>
    );
}

export default For_loop;
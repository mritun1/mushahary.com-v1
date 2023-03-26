import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../component/common/Footer'
import Header from '../component/common/Header'

function Home() {
    
    return (
        <div >
            <Head>
                <title>Mushahary Family - Personal website</title>
                <meta name="description" content="Mushahary Family is a personal website for Mritunjoy Mushahary" />
                <link rel="icon" type="image/png" href="/../imgs/icons/profile.jpg" />
            </Head>
            <main className='container'>

                <Header />

                <div className="home_body">
                    <div className="content" >
                        
                        <div className="logo_div">
                            <div className="logo_show">
                                <div></div>
                            </div>
                            <div className="logo_text">
                                <h1>Mushahary Family - Site</h1>
                                <p>This is the personal website for Mushahary Family.</p>
                                <hr />
                            </div>
                        </div>
                        <div className="title">
                            <h2>Our Team & Developer </h2>
                        </div>
                        <div className="column_dual">
                            <div>
                                <Link href="/team/mritunjoy-mushahary">
                                    <div>
                                        <div style={{ backgroundImage: `url(/imgs/icons/profile.jpg)` }}></div>
                                        <h3>Mritunjoy Mushahary</h3>
                                        <p>Software Developer</p>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link href="">
                                    <div>
                                        <div style={{ backgroundImage:`url(/imgs/icons/pritom.jpg)`}}></div>
                                        <h3>Pritom Mushahary</h3>
                                        <p>Software Developer</p>
                                    </div>
                                </Link>

                            </div>
                        </div>
                        <div className="title">
                            <h2>Our Services & Product</h2>
                        </div>
                        <div className="column_multi">
                            <div>
                                <Link href="/photos/v2/photos">
                                    <div style={{ backgroundImage: `url("imgs/homepage/photos.png")` }} className="cons"></div>
                                    <div className="txt">
                                        <h4>Photos</h4>
                                        <p>300+</p>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://www.youtube.com/channel/UCAtGNXWv745_aJ1d6hUzIDw">
                                    <div style={{ backgroundImage: `url("imgs/homepage/video.png")` }} className="cons"></div>
                                    <div className="txt">
                                        <h4>Videos</h4>
                                        <p>300+</p>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link href="/articles/v2">
                                    <div style={{ backgroundImage: `url("imgs/homepage/articles.png")` }} className="cons"></div>
                                    <div className="txt">
                                        <h4>Articles</h4>
                                        <p>300+</p>
                                    </div>
                                </Link>

                            </div>
                            <div>
                                <Link href="">
                                    <div style={{ backgroundImage: `url("imgs/homepage/forum.png")` }} className="cons"></div>
                                    <div className="txt">
                                        <h4>Forum</h4>
                                        <p>300+</p>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link href="">
                                    <div style={{ backgroundImage: `url("imgs/homepage/tools.png")` }} className="cons"></div>
                                    <div className="txt">
                                        <h4>Tools</h4>
                                        <p>300+</p>
                                    </div>
                                </Link>

                            </div>
                            <div>
                                <Link href="https://github.com/mritun1?tab=repositories">
                                    <div style={{ backgroundImage: `url("imgs/homepage/book.png")` }} className="cons"></div>
                                    <div className="txt">
                                        <h4>Libraries</h4>
                                        <p>300+</p>
                                    </div>
                                </Link>

                            </div>
                        </div>
                        
                    </div>
                </div>

                <Footer />

            </main>
        </div>
    )
}

export default Home


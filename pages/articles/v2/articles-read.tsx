import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../../component/common/footer'
import Header from '../../../component/common/header'
import ArticlesCategory from '../../../component/public/articles/ArticlesCategory'

export default function ArticlesRead() {
    return (
        <div >
            <Head>
                <title> About - Mritunjoy Mushahary Personal website</title>
                <meta name="description" content="About - Mritunjoy Mushahary Personal website" />
                <link rel="icon" type="image/png" href="/../imgs/icons/profile.jpg" />
            </Head>
            <main className='container'>

                <Header />

                <div className="articles">
                    <ArticlesCategory />
                    <div className="contentWithRightBar">
                        <div>

                            <div className="photos_logo">
                                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, reiciendis!</h1>
                            </div>

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

                            <div className="article_img">
                                <img src="/imgs/photos/elon-musk-spacex-vogue-2015-ivvpnrdw3n9mz2sc.jpg" alt="" />
                            </div>

                            <div className="description_txt">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam hic sequi corrupti ad illo, eum dolores magni molestias modi incidunt.
                                </p>
                            </div>

                            <div className="article_content">


                                <h2>The tesd sdf sdfsdf sdf</h2>
                                <ul>
                                    <li>SDFSDF</li>
                                    <li>SDFSDF</li>
                                    <li>SDFSDF</li>
                                    <li>SDFSDF</li>
                                    <li>SDFSDF</li>
                                    <li>SDFSDF</li>
                                </ul>


                            </div>


                        </div>
                        <div>
                            {/* RIGHT BAR */}

                            

                            <div className="article_small">
                                <Link href={"/articles/v2/articles-read"}>
                                    <div
                                        className="img"
                                        style={{ backgroundImage: `url("/imgs/photos/20160225173731-young-millionaire-sports-car-luxury-attire-businessman-rich-wealthy-lifestyle.jpeg")` }}
                                    ></div>
                                    <div className="txt">
                                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla </h4>
                                    </div>
                                </Link>
                            </div>

                            <div className="article_small">
                                <Link href={"/articles/v2/articles-read"}>
                                    <div
                                        className="img"
                                        style={{ backgroundImage: `url("/imgs/photos/20160225173731-young-millionaire-sports-car-luxury-attire-businessman-rich-wealthy-lifestyle.jpeg")` }}
                                    ></div>
                                    <div className="txt">
                                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla </h4>
                                    </div>
                                </Link>
                            </div>

                            <div className="article_small">
                                <Link href={"/articles/v2/articles-read"}>
                                    <div
                                        className="img"
                                        style={{ backgroundImage: `url("/imgs/photos/20160225173731-young-millionaire-sports-car-luxury-attire-businessman-rich-wealthy-lifestyle.jpeg")` }}
                                    ></div>
                                    <div className="txt">
                                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla </h4>
                                    </div>
                                </Link>
                            </div>

                            <div className="article_small">
                                <Link href={"/articles/v2/articles-read"}>
                                    <div
                                        className="img"
                                        style={{ backgroundImage: `url("/imgs/photos/20160225173731-young-millionaire-sports-car-luxury-attire-businessman-rich-wealthy-lifestyle.jpeg")` }}
                                    ></div>
                                    <div className="txt">
                                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla </h4>
                                    </div>
                                </Link>
                            </div>

                            <div className="article_small">
                                <Link href={"/articles/v2/articles-read"}>
                                    <div
                                        className="img"
                                        style={{ backgroundImage: `url("/imgs/photos/20160225173731-young-millionaire-sports-car-luxury-attire-businessman-rich-wealthy-lifestyle.jpeg")` }}
                                    ></div>
                                    <div className="txt">
                                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla </h4>
                                    </div>
                                </Link>
                            </div>

                            <div className="article_small">
                                <Link href={"/articles/v2/articles-read"}>
                                    <div
                                        className="img"
                                        style={{ backgroundImage: `url("/imgs/photos/20160225173731-young-millionaire-sports-car-luxury-attire-businessman-rich-wealthy-lifestyle.jpeg")` }}
                                    ></div>
                                    <div className="txt">
                                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla </h4>
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

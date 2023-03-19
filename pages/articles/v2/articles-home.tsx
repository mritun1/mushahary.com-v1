import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../../component/common/footer'
import Header from '../../../component/common/header'
import ArticlesCategory from '../../../component/public/articles/ArticlesCategory'
import ArticlesSearch from '../../../component/public/articles/ArticlesSearch'

export default function ArticlesHome() {
    return (
        <div >
            <Head>
                <title>Mushahary Family Articles</title>
                <meta name="description" content="Mushahary Family Articles" />
                <link rel="icon" type="image/png" href="/../imgs/icons/profile.jpg" />
            </Head>
            <main className='container'>

                <Header />

                <div className="articles">
                    
                    <ArticlesCategory/>

                    <div className="photos_logo">
                        <h1>Mushahary Family Articles</h1>
                        <p>Here we want to share our experience with you. Here you will see all the Articles written by Mushahary Family.</p>
                    </div>

                    <ArticlesSearch/>

                    <div className="articles_columns">
                        <div>
                            <Link href={"/articles/v2/articles-read"}>
                                <div 
                                className="img"
                                style={{backgroundImage:`url("/imgs/photos/20160225173731-young-millionaire-sports-car-luxury-attire-businessman-rich-wealthy-lifestyle.jpeg")`}}
                                ></div>
                                <div className="txt">
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, facere inventore perferendis labore autem alias eius, voluptas optio dolorum, ullam error nostrum beatae saepe provident hic! Aperiam, consequuntur voluptate assumenda fugiat aliquid iusto quisquam incidunt?</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link href={"/articles/v2/articles-read"}>
                                <div
                                    className="img"
                                    style={{ backgroundImage: `url("/imgs/photos/20160225173731-young-millionaire-sports-car-luxury-attire-businessman-rich-wealthy-lifestyle.jpeg")` }}
                                ></div>
                                <div className="txt">
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, facere inventore perferendis labore autem alias eius, voluptas optio dolorum, ullam error nostrum beatae saepe provident hic! Aperiam, consequuntur voluptate assumenda fugiat aliquid iusto quisquam incidunt?</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link href={""}>
                                <div
                                    className="img"
                                    style={{ backgroundImage: `url("/imgs/photos/20160225173731-young-millionaire-sports-car-luxury-attire-businessman-rich-wealthy-lifestyle.jpeg")` }}
                                ></div>
                                <div className="txt">
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, facere inventore perferendis labore autem alias eius, voluptas optio dolorum, ullam error nostrum beatae saepe provident hic! Aperiam, consequuntur voluptate assumenda fugiat aliquid iusto quisquam incidunt?</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link href={""}>
                                <div 
                                className="img"
                                style={{backgroundImage:`url("/imgs/photos/20160225173731-young-millionaire-sports-car-luxury-attire-businessman-rich-wealthy-lifestyle.jpeg")`}}
                                ></div>
                                <div className="txt">
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, facere inventore perferendis labore autem alias eius, voluptas optio dolorum, ullam error nostrum beatae saepe provident hic! Aperiam, consequuntur voluptate assumenda fugiat aliquid iusto quisquam incidunt?</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link href={""}>
                                <div 
                                className="img"
                                style={{backgroundImage:`url("/imgs/photos/20160225173731-young-millionaire-sports-car-luxury-attire-businessman-rich-wealthy-lifestyle.jpeg")`}}
                                ></div>
                                <div className="txt">
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, facere inventore perferendis labore autem alias eius, voluptas optio dolorum, ullam error nostrum beatae saepe provident hic! Aperiam, consequuntur voluptate assumenda fugiat aliquid iusto quisquam incidunt?</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link href={""}>
                                <div
                                    className="img"
                                    style={{ backgroundImage: `url("/imgs/photos/20160225173731-young-millionaire-sports-car-luxury-attire-businessman-rich-wealthy-lifestyle.jpeg")` }}
                                ></div>
                                <div className="txt">
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, facere inventore perferendis labore autem alias eius, voluptas optio dolorum, ullam error nostrum beatae saepe provident hic! Aperiam, consequuntur voluptate assumenda fugiat aliquid iusto quisquam incidunt?</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link href={""}>
                                <div
                                    className="img"
                                    style={{ backgroundImage: `url("/imgs/photos/20160225173731-young-millionaire-sports-car-luxury-attire-businessman-rich-wealthy-lifestyle.jpeg")` }}
                                ></div>
                                <div className="txt">
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, facere inventore perferendis labore autem alias eius, voluptas optio dolorum, ullam error nostrum beatae saepe provident hic! Aperiam, consequuntur voluptate assumenda fugiat aliquid iusto quisquam incidunt?</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>

                <Footer />

            </main>
        </div>
    )
}

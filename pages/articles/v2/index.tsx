import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../../../component/common/Footer'
import Header from '../../../component/common/Header'
import ArticlesCategory from '../../../component/public/articles/ArticlesCategory'
import ArticlesSearch from '../../../component/public/articles/ArticlesSearch'
import API_URL from '../../../controllers/backend/api_url'

export default function ArticlesHome() {


    const [articleList, setArticleList] = useState([])
    let [pagNum, setPagNum] = useState(1)
    var limit = 10
    var offset = 0
    const getArticleLists = async (o: any, l: any) => {
        try {
            const res = await API_URL.get("/api/v1/articles/getAll/" + o + "/" + l)
            setArticleList(res.data.data)
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

    return (
        <div >
            <Head>
                <title>Articles - Mushahary Family</title>
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

                        {articleList.map(post => {
                            const { SL, ID, TITLE, CATEGORY_NAME, THUMBNAIL, DESCRIPTION } = post
                            return <div key={ID}>
                                <Link href={"/articles/v2/"+ID+"/" + TITLE}>
                                    <div
                                        className="img"
                                        style={{ backgroundImage: `url(` + THUMBNAIL +`)` }}
                                    ></div>
                                    <div className="txt">
                                        <h3>{TITLE}</h3>
                                        <p>{DESCRIPTION}</p>
                                    </div>
                                </Link>
                            </div>
                        })}

                        
                    </div>

                </div>

                <Footer />

            </main>
        </div>
    )
}

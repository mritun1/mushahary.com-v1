import { time, timeStamp } from 'console'
import { convertFromHTML, convertToHTML } from 'draft-convert'
import { Html } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../../../../component/common/footer'
import Header from '../../../../component/common/header'
import ArticlesCategory from '../../../../component/public/articles/ArticlesCategory'
import API_URL from '../../../../controllers/backend/api_url'



function ArticlesRead() {

    //GET THE EDIT QUERY
    const router = useRouter()
    let { id } = router.query
    console.log(id)

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        id: '',
        content: '',
        category_name: '',
        date: '',
        thumbnail: '',
    });



    const getEditData = async () => {
        try {
            const res = await API_URL.get("/api/v1/articles/getById/" + id)
            if (res.data.status === 200) {

                console.log(res.data.data)

                // CONVERTING TIME START
                const date = new Date(res.data.data.UPDATE_DATE * 1000); // convert Unix timestamp to JavaScript timestamp by multiplying with 1000
                const formattedDate = date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                });
                // CONVERTING TIME END

                setFormData(prevState => ({
                    ...prevState,
                    title: res.data.data.TITLE,
                    description: res.data.data.DES,
                    id: res.data.data.ID,
                    content: res.data.data.CONTENT,
                    category_name: res.data.data.CATEGORY_NAME,
                    date: formattedDate,
                    thumbnail: res.data.data.THUMBNAIL,
                }))
                //Related ARTICLES
                getRelatedArticles(res.data.data.CATEGORY_ID,10)
            }

        } catch (error) {
            console.log(error)
        }
    }

    //GET ALL RELATED ARTICLES
    const [relatedArticles, setRelatedArticles] = useState([])
    const getRelatedArticles = async (cat: any, l: any) => {
        try {
            const res = await API_URL.get("/api/v1/articles/getRelatedArticles/" + l + "/" + cat)
            //console.log(res.data.data)
            setRelatedArticles(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getEditData();


    }, []);

    return (
        <div >
            <Head>
                <title>{formData.title}</title>
                <meta name="description" content={formData.description} />
                <link rel="icon" type="image/png" href="/../imgs/icons/profile.jpg" />
            </Head>
            <main className='container'>

                <Header />

                <div className="articles">
                    <ArticlesCategory />
                    <div className="contentWithRightBar">
                        <div>

                            <div className="photos_logo">
                                <h1>{formData.title}</h1>
                            </div>

                            <ul className="cat">
                                <li>
                                    <Link href={"/f"}>
                                        <button>{formData.category_name}</button>
                                    </Link>
                                </li>
                                <li>
                                    Date: {formData.date}
                                </li>
                            </ul>

                            <div className="article_img">

                                <img src={formData.thumbnail} alt="" />
                            </div>

                            <div className="description_txt">

                                <p>
                                    {formData.description}
                                </p>
                            </div>

                            <div className="article_content">


                                <div dangerouslySetInnerHTML={{ __html: formData.content }} />


                            </div>


                        </div>
                        <div>
                            {/* RIGHT BAR */}
                            
                            {relatedArticles ? (relatedArticles.map(post => {
                                const { ID, TITLE, DESCRIPTION,THUMBNAIL } = post
                                return <div key={ID} className="article_small">
                                    <a href={"/articles/v2/"+ID+"/"+TITLE}>
                                        <div
                                            className="img"
                                            style={{ backgroundImage: `url("`+THUMBNAIL+`")` }}
                                        ></div>
                                        <div className="txt">
                                            <h4>{TITLE}</h4>
                                        </div>
                                    </a>
                                </div>
                            })) : (<p>No content Found!</p>)}


                            

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
    const { id } = params;

    return {
        props: {
            id,
        },
    };
}

export default ArticlesRead
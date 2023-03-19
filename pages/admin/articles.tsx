import AdminSidebar from "../../component/admin/common/AdminSidebar";
import Link from "next/link";
import AdminHead from "../../component/admin/common/AdminHead";
import Login from "../../controllers/authentication/login";
import { useEffect, useState } from "react";
import API_URL from "../../controllers/backend/api_url";

const articles = () => {

    let articleSL = 0;

    //LOGIN AUTHENTICATION
    Login.LoginAuthentication("/admin/login")

    const [articleList,setArticleList] = useState([])
    let [pagNum,setPagNum] = useState(1)
    var limit = 10
    var offset = 0
    const getArticleLists = async (o:any,l:any) => {
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
    function articlePag(e:any) {
        let newlimit = e.target.getAttribute("pag-attr") * limit
        if (newlimit>limit){
            offset = newlimit - limit
        }
        getArticleLists(offset,limit)
    }
    let pagBtns = []
    let btnNum = 0
    for(let i = 0;i<=pagNum;i++){
        btnNum++
        pagBtns.push(<button key={btnNum} onClick={articlePag} pag-attr={btnNum}>{btnNum}</button>)
    }
    //PAGINATION END

    useEffect(()=>{
        getArticleLists(offset,limit)
    },[])

    return (
        <div>
            <div>

                <AdminHead/>

                <div className="adminBody">
                    <AdminSidebar></AdminSidebar>
                    <div className="adminContent">

                        <div className="contTitle">
                            <h2>
                                <i className="fa-solid fa-newspaper"></i> 
                                Articles 
                                <Link href={"/admin/edit-article-d/"}>
                                    <button><i className="fa-solid fa-plus"></i> Create Article</button>
                                </Link>
                            </h2>
                        </div>

                        <div className="contTable">
                            <table>
                                <thead>
                                    <tr>
                                        <td>SL</td>
                                        <td colSpan={2}>Article Title</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {articleList.map(post=>{
                                        const {ID,TITLE,CATEGORY_NAME} = post
                                        articleSL++
                                        return <tr key={ID}>
                                                <td>{articleSL}</td>
                                                <td>{TITLE} {ID}</td>
                                                <td>
                                                    <h3>{CATEGORY_NAME}</h3>
                                                    <Link target={"_blank"} href="">
                                                        <button><i className="fa-solid fa-eye"></i> View</button>
                                                    </Link>
                                                    <Link href={"/admin/edit-article-d/" + ID}>
                                                        <button><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                                                    </Link>
                                                    <button><i className="fa-solid fa-trash"></i> Delete</button>
                                                </td>
                                            </tr>
                                    })}
                                    
                                </tbody>
                            </table>
                        </div>

                        <div className="adminArticleListPag">
                            {pagBtns}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default articles;
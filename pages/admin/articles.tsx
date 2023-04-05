import AdminSidebar from "../../component/admin/common/AdminSidebar";
import Link from "next/link";
import AdminHead from "../../component/admin/common/AdminHead";
import { useEffect, useState } from "react";
import API_URL from "../../controllers/backend/api_url";

const Articles = () => {

   
        

    const [articleList,setArticleList] = useState([])
    let [pagNum,setPagNum] = useState(1)
    var limit = 10
    var offset = 0
    const getArticleLists = async (o:any,l:any) => {
        try {
            const res = await API_URL.get("/api/v1/articles/only_admin/" + o + "/" + l)
            
            if (res.data.status == 200){
                setArticleList(res.data.data)
                const pagNumNew = parseInt(res.data.total) / limit
                setPagNum(pagNumNew)
            }else{
                window.location.href = "/"
            }
        } catch (error) {
            console.log(error)
        }
    }

    //PAGINATION START
    let newlimit = 0
    function articlePag(e:any) {
        newlimit = e.target.getAttribute("pag-attr") * limit
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

    function deleteArticle(id:number){
        const confirmed = window.confirm("Are you sure to Delete?")
        if(confirmed){
            const del = async () => {
                const res = await API_URL.delete("/api/v1/articles/delete/" + id)
                //console.log(res.data)
                
                if(res.data.status == 200){
                    getArticleLists(offset, limit)
                }
            }
            del()
        }
    }

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
                                        <td colSpan={3}>Article Title</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {articleList?(articleList.map(post=>{
                                        const {SL,ID,TITLE,CATEGORY_NAME,PHOTO_URL} = post
                                        return <tr key={ID}>
                                                <td>{SL}</td>
                                                <td>
                                                <img src={PHOTO_URL} style={{height:`100px`,width:`auto`}} />
                                                </td>
                                                <td>{TITLE}</td>
                                                <td>
                                                    <h3>{CATEGORY_NAME}</h3>
                                                    <Link target={"_blank"} href="">
                                                        <button><i className="fa-solid fa-eye"></i> View</button>
                                                    </Link>
                                                    <Link href={"/admin/edit-article-d/" + ID}>
                                                        <button><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                                                    </Link>
                                                <button onClick={() => deleteArticle(ID)}><i className="fa-solid fa-trash"></i> Delete</button>
                                                </td>
                                            </tr>
                                    })):(<p>Sorry! No content Found</p>)}
                                    
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

export default Articles;